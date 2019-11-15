<template>
  <div>
    <div v-if="movieList.length > 0">
      <MovieItem
        v-for="(movie,index) in movieList"
        :key="movie.id"
        :movie="movie"
        :index="index"
      ></MovieItem>
    </div>
    <van-loading v-else type="spinner" />
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
  data() {
    return {
      movieList: []
    }
  },

  components: {
    MovieItem
  },

  async mounted() {
    let result = await get({
      url: '/ajax/movieOnInfoList?token='
    })
    this.movieList = result.movieList
    let movieIds = _.chunk(result.movieIds.slice(12), 10)

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
            token: '',
            movieIds: movieIds[page].join(',')
          }
        })

        this.movieList = [
          ...this.movieList,
          ...result.coming
        ]

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