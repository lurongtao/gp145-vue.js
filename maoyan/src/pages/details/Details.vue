<template>
  <div class="box">
    <!-- <div @click="$router.push('/details/4')">ccc</div> -->
    <div>ccc</div>
    <div @click="handleClick">bbb</div>
    <div>aaa</div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(0)
  },

  methods: {
    handleClick() {
      // let pos = document.body.scrollTop || document.documentElement.scrollTop
      // let pos = this.$route.query.pos
      this.$router.back()
    }
  },

  // watch: {
  //   $route(to, from) {
  //     console.log(from)
  //   }
  // },
}
</script>

<style lang='stylus' scoped>
.box
  >div:first-child
    height .5rem
  >div:nth-child(2)
    // position sticky
    // top 0
    height .5rem
    background yellowgreen
  >div:last-child
    height 10rem
    background #666
</style>