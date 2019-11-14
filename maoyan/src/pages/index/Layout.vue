<template>
  <div class="index-wrap">
    <main>
      <router-view></router-view>
    </main>
    <van-tabbar v-model="active" active-color="#e54748" route>
      <van-tabbar-item
        replace
        to="/index/movies/intheaters"
      >
        <span>电影</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="search"
        replace
        to="/index/theaters"
      >影院</van-tabbar-item>
      <van-tabbar-item
       icon="setting-o"
       to="/index/profile"
      >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

import moiveImg from 'assets/movie.png'
import moiveActiveImg from 'assets/movie-active.png'

export default {
  data() {
    return {
      active: 0,
      icon: {
        active: moiveActiveImg,
        inactive: moiveImg
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.index-wrap
  display flex
  flex-direction column
  height 100%

  main
    flex 1
    background #fff
    height 100%
    > div {
      height 100%
    }

  img
    width auto
</style>