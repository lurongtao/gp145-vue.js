<template>
<div class="wrap">
  <div class="most-expected">
    <p class="title">近期最受期待</p>
    <div class="most-expected-list">
      <div>
        <div class="expected-item"
          v-for="movie in expectedList"
        >
          <div class="poster default-img-bg">
            <img :src="movie.img | wh('340.460')"
              onerror="this.style.visibility='hidden'">
            <span class="wish-bg"></span>
            <span class="wish"><span class="wish-num">{{movie.wish}}</span>人想看</span>
            <div class="toggle-wish" data-wishst="0" data-movieid="1217023">
              <span></span>
            </div>
          </div>
          <h5 class="name line-ellipsis">{{movie.nm}}</h5>
          <p class="date">{{movie.comingTitle}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { get } from 'utils/http'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      expectedList: []
    }
  },

  async mounted() {
    let result = await get({
      url: '/ajax/mostExpected',
      params: {
        ci: 1,
        limit: 10,
        offset: 0,
        token: ''
      }
    })
    this.expectedList = result.coming
    new BScroll('.most-expected-list', {
      scrollX: true
    })
  }
}
</script>

<style lang='stylus' scoped>
.wrap
  padding-right .16rem
  background #fff
.most-expected-list
  > div
    width max-content
</style>