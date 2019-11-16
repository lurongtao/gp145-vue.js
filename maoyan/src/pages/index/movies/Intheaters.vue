<template>
  <MovieWrap type="intheaters">
    <MovieList type="intheaters"></MovieList>
  </MovieWrap>
</template>

<script>
import MovieWrap from './MovieWrap'
import MovieList from 'components/movielist/MovieList'
export default {
  components: {
    MovieWrap,
    MovieList
  }
}
</script>

<style lang='stylus'>

</style>