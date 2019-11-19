<template>
  <section id="city-list" class="city-list-container" style="display: block;">
    <van-index-bar :index-list="indexList">
      <section>
        <van-index-anchor index="定位" class="city-title">定位城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div class="location-city">定位失败，请点击重试</div>
        </div>
      </section>

      <section class="history-city-list">
        <van-index-anchor index="最近" class="city-title">最近访问城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item" data-nm="深圳" data-id="30">深圳</div>

          <div class="city-item" data-nm="北京" data-id="1">北京</div>

          <div class="city-item" data-nm="桂林" data-id="93">桂林</div>
        </div>
      </section>

      <section>
        <van-index-anchor index="热门" class="city-title">热门城市</van-index-anchor>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item" data-nm="上海" data-id="10">上海</div>

          <div class="city-item" data-nm="北京" data-id="1">北京</div>

          <div class="city-item" data-nm="广州" data-id="20">广州</div>

          <div class="city-item" data-nm="深圳" data-id="30">深圳</div>

          <div class="city-item" data-nm="武汉" data-id="57">武汉</div>

          <div class="city-item" data-nm="天津" data-id="40">天津</div>

          <div class="city-item" data-nm="西安" data-id="42">西安</div>

          <div class="city-item" data-nm="南京" data-id="55">南京</div>

          <div class="city-item" data-nm="杭州" data-id="50">杭州</div>

          <div class="city-item" data-nm="成都" data-id="59">成都</div>

          <div class="city-item" data-nm="重庆" data-id="45">重庆</div>
        </div>
      </section>

      <section>
        <div v-for="(city, key) in cityList" :key="key">
          <van-index-anchor :index="key" class="city-title city-title-letter">{{key}}</van-index-anchor>
          <div class="city-list city-list-block clearfix">
            <div class="city-item" v-for="c in city" :key="c.id">
              {{c.nm}}
            </div>
          </div>
        </div>
      </section>
    </van-index-bar>
  </section>
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant'
Vue.use(IndexBar).use(IndexAnchor)
import { get } from 'utils/http'
import _ from 'lodash'

export default {
  data() {
    return {
      cityList: {}
    }
  },

  created() {
    this.indexListInit = [
      '定位',
      '最近',
      '热门'
    ]
  },

  computed: {
    indexList() {
      return [
        ...this.indexListInit,
        ...Object.keys(this.cityList).sort()
      ]
    }
  },

  async mounted() {
    let result = await get({
      url: '/dianying/cities.json'
    })
    let chunkedResult = _.groupBy(result.cts, (value) => {
      return value.py.substr(0, 1).toUpperCase()
    })
    let reducedResult = Object.keys(chunkedResult).sort().reduce((obj, key) => {
      obj[key] = chunkedResult[key]
      return obj
    }, {})
    this.cityList = reducedResult
  },
}
</script>

<style lang='stylus' scoped>

</style>