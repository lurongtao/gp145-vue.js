<template>
  <div>
    <div class="coming-list" v-if="type==='comingsoon'">
      <div 
        v-for="(value,key) in comingsoonMap"
        :key="key"
      >
        <p class="group-date">11月16日 周六</p>
        <MovieItem
          v-for="(movie,index) in value"
          :key="movie.id"
          :movie="movie"
          :index="index"
        ></MovieItem>
      </div>
    </div>
    <div v-else>
      <MovieItem
        v-for="(movie,index) in intheatersList"
        :key="movie.id"
        :movie="movie"
        :index="index"
      ></MovieItem>
    </div>
    <!-- <van-loading v-else type="spinner" /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import BScroll from 'better-scroll'
import _ from 'lodash'
import { get } from 'utils/http'
import MovieItem from './MovieItem'

import { Loading, Toast } from 'vant'
Vue.use(Loading).use(Toast)

export default {
  props: ['type'],
  data() {
    return {
      intheatersList: [],
      comingsoonMap: {}
    }
  },

  beforeCreate() {
    this.tempList = []
  },

  genData(result) {
    if (this.type === 'intheaters') {
      console.log(result.coming)
      this.intheatersList = [
        ...this.intheatersList,
        ...result.coming
      ]
    } else {
      this.tempList = [
        ...this.tempList,
        ...result.coming
      ]
      this.comingsoonMap = _.groupBy(this.tempList, 'comingTitle')
    }
  },

  components: {
    MovieItem
  },

  async mounted() {
    var url
    var offset

    if (this.type === 'intheaters') {
      url = '/ajax/movieOnInfoList'
      offset = 12
    } else {
      url = '/ajax/comingList'
      offset = 10
    }

    let result = await get({
      url,
      params: {
        token: '',
        ci: 1,
        limit: 10
      }
    })
    console.log(result)

    this.$options.genData.call(this, result)

    let movieIds = _.chunk(result.movieIds.slice(offset), 10)

    let bScroll = new BScroll('.tab-content', {
      pullUpLoad: true,
      click: true,
      probeType: 2
    })

    let page = 0

    bScroll.on('pullingUp', async() => {
      if (page < movieIds.length) {
        let result = await get({
          url: '/ajax/moreComingList',
          params: {
            ci: 1,
            token: '',
            movieIds: movieIds[page].join(',')
          }
        })

        this.$options.genData.call(this, result)

        await this.$nextTick()
        bScroll.refresh()
        
        page++
      } else {
        Toast({
          message: '到底了~',
          position: 'bottom',
          duration: 1000
        })
      }
      bScroll.finishPullUp()
    })

    bScroll.on('scroll', () => {
      this.$store.commit('setSticky', bScroll.y < -50)
    })
  }
}

</script>

<style lang='stylus'>

</style>