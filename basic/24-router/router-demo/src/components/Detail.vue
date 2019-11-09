<template>
  <div>
    detail
  </div>
</template>

<script>
export default {
  props: ['id', 'nm'],
  mounted() {
    console.log(this.id, this.nm)
  },
}
</script>

<style lang='stylus' scoped>

</style>