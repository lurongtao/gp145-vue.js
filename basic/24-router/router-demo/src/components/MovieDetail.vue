<template>
  <div>
    {{id}} - {{name}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      name: ''
    }
  },

  mounted() {
    let { id, nm } = this.$route.params
    this.id = id
    this.name = nm
  },

  beforeRouteUpdate(to, from, next) {
    let { id, nm } = to.params
    this.id = id
    this.name = nm
  }

  // watch: {
  //   $route(to, from) {
  //     let { id, nm } = to.params
  //     this.id = id
  //     this.name = nm
  //   }
  // }
}
</script>

<style lang='stylus' scoped>

</style>