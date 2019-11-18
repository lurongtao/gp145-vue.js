<template>
  <div @click="handleClick">
    test
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push('/details?pos=' + this.$route.query.pos)
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>