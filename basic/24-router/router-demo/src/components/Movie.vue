<template>
  <div>
    <ul>
      <router-link
        tag="li"
        :to="`/movie/detail/${movie.id}/${movie.nm}`"
        v-for="movie in list"
        :key="movie.id"
      >
        {{movie.nm}}
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },

  mounted() {
    fetch('/ajax/movieOnInfoList?token=')
      .then(response => response.json())
      .then(data => {
        this.list = data.movieList
      })
  }
}
</script>

<style lang='stylus' scoped>

</style>