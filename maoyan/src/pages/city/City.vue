<template>
  <section id="city-list" class="city-list-container" style="display: block;">
    <div>
      <section>
        <div id="location" ref="location" class="city-title">定位城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="location-city">定位失败，请点击重试</div>
        </div>
      </section>

      <section class="history-city-list">
        <div id="history" ref="history" class="city-title">最近访问城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item"
            v-for="city in visitedCities"
            :key="city.id"
            @click="handlePickCity(city.id, city.nm)"
          >{{city.nm}}</div>
        </div>
      </section>

      <section>
        <div id="hot" ref="hot" class="city-title">热门城市</div>
        <div class="city-list city-list-inline clearfix">
          <div class="city-item"
            v-for="city in hotCities"
            :key="city.id"
            @click="handlePickCity(city.id, city.nm)"
          >{{city.nm}}</div>
        </div>
      </section>

      <section>
        <div v-for="(city, key) in cityList" :key="key">
          <div :id="key" :ref="key" class="city-title city-title-letter">{{key}}</div>
          <div class="city-list city-list-block clearfix">
            <div class="city-item" v-for="c in city" :key="c.id" @click="handlePickCity(c.id, c.nm)">
              {{c.nm}}
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="nav">
      <div class="nav-item" @click="top3ScrollToElement('location')">
        定位
      </div>
      <div class="nav-item" @click="top3ScrollToElement('history')">
        最近
      </div>
      <div class="nav-item" @click="top3ScrollToElement('hot')">
        热门
      </div>
      <div class="gap"></div>
      <div 
        class="nav-letter nav-item" 
        @touchstart="alphaScrollToElement(item)" 
        v-for="item in indexList" 
        :key="item"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
      >
        {{item}}
      </div>
    </section>
  </section>
</template>

<script>
// import Vue from 'vue';
// import { IndexBar, IndexAnchor } from 'vant'
// Vue.use(IndexBar).use(IndexAnchor)

import BScroll from 'better-scroll'

import { get } from 'utils/http'
import _ from 'lodash'
import store from 'store'

export default {
  data() {
    return {
      cityList: {},
      hotCities: []
    }
  },

  created() {
    this.bScroll = null,
    this.alphaATop = 0
    this.alphaAHeight = 0,
    this.alphas = []
    this.visitedCities = store.get('visitedCities')
  },

  computed: {
    indexList() {
      return [
        ...Object.keys(this.cityList).sort()
      ]
    }
  },

  methods: {
    top3ScrollToElement(id) {
      let target = this.$refs[id]
      this.bScroll.scrollToElement(target)
    },
    alphaScrollToElement(id) {
      let target = this.$refs[id][0]
      this.bScroll.scrollToElement(target)
    },
    
    handleTouchMove: _.throttle(function(e) {
      let clientY = e.touches[0].clientY
      let height = clientY - this.alphaATop
      let index = Math.floor(height / this.alphaAHeight)
      
      let target = this.$refs[this.alphas[index]][0]
      this.bScroll.scrollToElement(target)
    }, 100),

    handleTouchEnd() {
      // console.log('end')
    },

    handlePickCity(id, nm) {
      let cities = store.get('visitedCities') || []
      cities.push({
        id,
        nm
      })
      store.set('visitedCities', _.uniqBy(cities, (value) => {
        return value.id !== id
      }))

      store.set('currentCity', {
        id, nm
      })

      this.$store.dispatch('cities/saveCity', {
        id,
        nm
      })

      this.$router.back()
    }
  },

  async mounted() {
    let result = await get({
      url: '/dianying/cities.json'
    })
    this.hotCities = _.sampleSize(result.cts, 11)
    let chunkedResult = _.groupBy(result.cts, (value) => {
      return value.py.substr(0, 1).toUpperCase()
    })
    this.alphas = Object.keys(chunkedResult).sort()
    let reducedResult = this.alphas.reduce((obj, key) => {
      obj[key] = chunkedResult[key]
      return obj
    }, {})
    this.cityList = reducedResult

    await this.$nextTick()
    this.bScroll = new BScroll('#city-list', {
      click: true
    })

    let { top, height } = this.$refs['A'][1].getBoundingClientRect()
    this.alphaATop = top
    this.alphaAHeight = height
  },
}

</script>

<style lang='stylus' scoped>
.gap
  height .1rem
</style>