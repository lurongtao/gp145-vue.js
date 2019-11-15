<template>
  <MovieWrap>
    <MostExpected></MostExpected>
    <MovieList></MovieList>
    <!-- <div>
      <div>
        <p>日期</p>
      </div>
      <div>
        <p>日期</p>
      </div>
    </div> -->
  </MovieWrap>
</template>

<script>
import MovieWrap from '../MovieWrap'
import MostExpected from './MostExpected'
import MovieList from 'components/movielist/MovieList'
export default {
  components: {
    MovieWrap,
    MostExpected,
    MovieList
  }
}
</script>

<style lang='stylus' scoped>

</style>