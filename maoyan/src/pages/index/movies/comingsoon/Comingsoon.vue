<template>
  <MovieWrap>
    <MostExpected></MostExpected>
    <MovieList type="comingsoon"></MovieList>
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