<template>
  <section data-page=".movie" class="movie singleton page active">
    <div class="page-wrap">
      <div class="tab-block">
        <div class="tab-content">
          <div class="list-wrap">
            <MovieItem
              v-for="movie in movieList"
              :key="movie.id"
              :movie="movie"
            ></MovieItem>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bScroll from 'better-scroll'
import { get } from 'utils/http'
import MovieItem from './MovieItem'
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

    new bScroll('.tab-content')
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
  .page-wrap
    position static !important
    height 100%
    .tab-block
      height 100%
      .tab-content
        height 100%
        overflow-y scroll
</style>