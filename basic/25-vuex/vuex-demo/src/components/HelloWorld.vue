<template>
  <div>
    hello {{$store.state.count}}
    <button @click="handleClick">add</button>
  </div>
</template>

<script>
export default {
  mounted() {
    
  },
  methods: {
    handleClick() {
      this.$store.commit('increment')
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>