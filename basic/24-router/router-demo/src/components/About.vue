<template>
  <div>
    about
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('beforeCreate')
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next((vm) => {
      console.log(vm)
    })
  },
  beforeRouteUpdate(to, from, next) {

  },
  mounted() {
    console.log('mounted')
    console.log(this.$route)
  },

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },

  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style lang='stylus' scoped>

</style>