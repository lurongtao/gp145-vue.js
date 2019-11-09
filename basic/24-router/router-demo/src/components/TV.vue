<template>
  <div>
    tv
    <button @click="handleClick">click</button>
    <button @click="gotoDetail">goto detail</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(this)
      // 编程式导航
      this.$router.replace('/')
    },
    gotoDetail() {
      this.$router.push({name: 'detail', params: { id: 3 }})
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>