<template>
  <div class="btn" :class="{pre: movie.showst === 4}">
    <span class="fix" data-bid="dp_wx_home_movie_btn">
      {{movie.showst === 4 ? '预售' : '购票'}}
    </span>
  </div>
</template>

<script>
export default {
  props: ['movie']
}
</script>

<style lang='stylus' scoped>

</style>