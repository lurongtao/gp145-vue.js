<template>
  <div>
    <div class="coming-list" v-if="type==='comingsoon' && tempList.length > 0">
      <div 
        v-for="(value,key) in comingsoonMap"
        :key="key"
      >
        <p class="group-date">{{key}}</p>
        <MovieItem
          v-for="(movie,index) in value"
          :key="movie.id"
          :movie="movie"
          :index="index"
        ></MovieItem>
      </div>
    </div>
    <div v-else-if="type==='intheaters' && intheatersList.length > 0">
      <MovieItem
        v-for="(movie,index) in intheatersList"
        :key="movie.id"
        :movie="movie"
        :index="index"
      ></MovieItem>
    </div>
    <van-loading v-if="(type==='comingsoon' && tempList.length === 0) || (type==='intheaters' && intheatersList.length === 0)" type="spinner" />
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
      comingsoonMap: {},
      tempList: []
    }
  },

  genData(result) {
    if (this.type === 'intheaters') {
      if (this.intheatersList.length === 0) {
        this.intheatersList = result.movieList
      } else {
        this.intheatersList = [
          ...this.intheatersList,
          ...result.coming
        ]
      }
      // this.$store.commit('setData', this.intheatersList)
    } else {
      this.tempList = [
        ...this.tempList,
        ...result.coming
      ]
      this.comingsoonMap = _.groupBy(this.tempList, 'comingTitle')
      // this.$store.commit('setData', this.comingsoonMap)
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

    let page = this.$store.state.scroll.page

    let loadedMoviesCount = page * 10 + offset

    let result = await get({
      url,
      params: {
        token: '',
        ci: 1,
        limit: loadedMoviesCount
      }
    })

    this.$options.genData.call(this, result)

    if (this.type === 'intheaters' && page > 0) {
      let secondResult = await get({
        url: '/ajax/moreComingList',
        params: {
          ci: 1,
          token: '',
          movieIds: result.movieIds.slice(12, page * 10 + 12).join(',')
        }
      })
      console.log(result.movieIds.slice(12, page * 10 + 12).join(','))
      // console.log(secondResult)
      this.$options.genData.call(this, secondResult)
    }

    let movieIds = _.chunk(result.movieIds.slice(loadedMoviesCount), 10)

    // 由于动画播放的原因，不允许给两个的容器定义better-scroll
    let scrollWrap = '.tab-content.' + this.type
    let bScroll = new BScroll(scrollWrap, {
      pullUpLoad: true,
      click: true,
      probeType: 2
    })

    bScroll.on('scrollEnd', () => {
      this.$store.commit('scroll/setPosition', {
        position: bScroll.y
      })
    })

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

        console.log(page)
        this.$store.commit('scroll/setPage', {
          page
        })
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

    await this.$nextTick()
    // console.log(this.$store.state.scroll.position)
    // console.log(this.$store.state.scroll.page)
    bScroll.scrollTo(0, this.$store.state.scroll.position)
  }
}

</script>

<style lang='stylus'>

</style>