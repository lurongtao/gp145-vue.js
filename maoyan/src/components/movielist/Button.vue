<template>
  <div class="btn"
    :data-wishst="0"
    :class="{
      pre: movie.showst === 4,
      'toggle-wish-btn': movie.showst === 1
    }"
  >
    <span class="fix" data-bid="dp_wx_home_movie_btn">
      {{movie.showst === 4 ? '预售' : movie.showst === 3 ? '购票' : '想看'}}
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