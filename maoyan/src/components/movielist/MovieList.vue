<template>
  <section data-page=".movie" class="movie singleton page active">
    <div class="page-wrap">
      <div class="swiper-header movie-ad"></div>
      <div class="tab-block">
        <div class="tab-content">
          <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
            <div class="list-wrap" style="margin-top: 0px;">
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
              <MovieItem></MovieItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MovieItem from './MovieItem'
export default {
  components: {
    MovieItem
  }
}
</script>

<style lang='stylus'>
section {
  flex 1
  position static !important
  .main-block {
    padding-right .16rem
  }
  .tab-content .list-wrap .item .content-wrapper {
    max-height: 1.15rem
    height 1.15rem
  }
}
</style>