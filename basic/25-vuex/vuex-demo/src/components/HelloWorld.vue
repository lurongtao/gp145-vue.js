<template>
  <div>
    hello {{count}} / {{doubleCount}}
    <button @click="handleClick">add</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { INCREMENT } from '../store/mutation-types'
export default {
  data() {
    return {
      title: 'hello'
    }
  },
  mounted() {
    
  },
  methods: {
    handleClick() {
      setTimeout(() => {
        this.$store.commit({
          type: INCREMENT,
          payload: 100
        })
      }, 1000)
    }
  },
  computed: {
    message() {
      return this.title + ' world'
    },
    ...mapGetters(['doubleCount']),
    ...mapState({
      count: state => state.count,
      count3: 'count',
      count4(state) {
        return state.count + this.title
      }
    })
  }
}
</script>

<style lang='stylus' scoped>

</style>