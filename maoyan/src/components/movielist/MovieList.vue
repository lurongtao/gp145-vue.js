<template>
  <section data-page=".movie" class="movie singleton page active">
    <div class="page-wrap">
      <div class="tab-block">
        <div class="tab-content">
          <div class="list-wrap" v-if="movieList.length > 0">
            <MovieItem
              v-for="(movie,index) in movieList"
              :key="movie.id"
              :movie="movie"
              :index="index"
            ></MovieItem>
          </div>
          <van-loading v-else type="spinner" />
        </div>
      </div>
    </div>
  </section>
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
section
  flex 1
  position static !important
  .main-block
    padding-right .16rem
  .tab-content .list-wrap .item .content-wrapper
    max-height: 1.15rem
    height 1.15rem
  .list-wrap
    padding-bottom .5rem
  .page-wrap
    position static !important
    height 100%
    .tab-block
      height 100%
      .tab-content
        height 100%
        overflow hidden
        position relative

.van-loading
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  margin auto
  width .4rem
  height .4rem

.toast
  .van-loading__spinner
    display none

</style>