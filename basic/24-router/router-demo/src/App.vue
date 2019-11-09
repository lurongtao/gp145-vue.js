<template>
  <div>
    <ul>
      <router-link active-class="active" tag="li" :to="{name: 'movie', query: {type: 1}}">电影</router-link>
      <router-link active-class="active" tag="li" to="/tv">电视剧</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  errorCaptured(err) {
    console.log(err.message)
  }
}
</script>

<style lang="css" scoped>
  ul li {
    list-style: none;
    display: inline-block;
    margin-right: 20px;
  }
  ul li.active {
    font-size: 20px;
    color: red;
  }
</style>