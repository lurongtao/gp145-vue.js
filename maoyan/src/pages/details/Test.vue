<template>
  <div>
    test
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'hello'
    }
  },

  mounted() {
    console.log(this.title)
    setTimeout(() => {
      this.title = 'world'
    }, 10000)
  },
}
</script>

<style lang='stylus' scoped>

</style>