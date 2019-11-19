<template>
  <section data-page=".movie" class="movie singleton page active">
    <div class="page-wrap">
      <div class="tab-block">
        <div class="tab-content" :class="type">
          <div class="list-wrap">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style lang='stylus'>
section.singleton
  position absolute !important
  height 100%
  .main-block
    padding-right .16rem
  .tab-content .list-wrap .item .content-wrapper
    max-height: 1.15rem
    height 1.15rem
  .list-wrap
    padding-bottom .5rem
    // background-color #fff !important
  .page-wrap
    position static !important
    height 100%
    .tab-block
      height 100%
      .tab-content
        height 100%
        overflow hidden
        position relative

.van-loading
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  margin auto
  width .4rem
  height .4rem

.toast
  .van-loading__spinner
    display none
</style>