<template>
  <div class="box">
    <div>ccc</div>
    <div>bbb</div>
    <div>aaa</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='stylus' scoped>
.box
  >div:first-child
    height .5rem
  >div:nth-child(2)
    position sticky
    top 0
    height .5rem
    background yellowgreen
  >div:last-child
    height 10rem
    background #666
</style>