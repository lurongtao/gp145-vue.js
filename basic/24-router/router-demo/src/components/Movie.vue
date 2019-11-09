<template>
  <div>
    <ul>
      <li
        v-for="movie in list"
        :key="movie.id"
        @click="handleClick(movie.id, movie.nm)"
      >
        {{movie.nm}}
      </li>
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

  methods: {
    handleClick(id, nm) {
      if (this.$route.params.nm !== nm) {
        this.$router.push({ name: 'moviedetail', params: {id, nm}, query: {x: 0} })
      }
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