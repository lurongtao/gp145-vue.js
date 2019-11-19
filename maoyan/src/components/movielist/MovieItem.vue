<template>
  <div class="item" @click="handleClick">
    <div class="main-block">
      <div class="avatar" sort-flag>
        <div class="default-img-bg">
          <img
            :src="movie.img | wh('256.360')"
            onerror="this.style.visibility='hidden'"
          />
        </div>
      </div>
      <div class="mb-outline-b content-wrapper">
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis">{{movie.nm}}</div>
            <span class="version" :class="movie.version"></span>
          </div>
          <div class="detail column">
            <div class="score line-ellipsis">
              <span class="score-suffix">观众评</span>
              <span class="grade">{{movie.sc}}</span>
            </div>
            <div class="actor line-ellipsis">{{movie.star}}</div>
            <div class="show-info line-ellipsis">{{movie.showInfo}}</div>
          </div>
        </div>
        <div class="button-block" data-id="1163219">
          <Button :movie="movie"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button'
export default {
  props: {
    movie: {
      type: Object
    },
    index: Number,
    bscroll: Object
  },

  methods: {
    handleClick() {
      this.$router.push({
        path: '/details'
      })
    }
  },

  components: {
    Button
  }
}
</script>

<style lang='stylus' scoped>
</style>