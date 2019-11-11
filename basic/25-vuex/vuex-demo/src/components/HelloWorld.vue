<template>
  <div>
    <button @click="decrement">mimus</button>
    hello {{count}} / {{doubleCount}}
    <button @click="increment">add</button>
    <button @click="multiple">multiple</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { INCREMENT_ACTION, DECREMENT_ACTION, MULTIPLE_ACTION } from '../store/action-types'
export default {
  data() {
    return {
      title: 'hello'
    }
  },
  mounted() {
    
  },
  methods: {
    increment() {
      this.$store.dispatch({
        type: INCREMENT_ACTION,
        payload: 100
      })
    },

    decrement() {
      this.$store.dispatch({
        type: DECREMENT_ACTION,
        payload: 50
      })
    },

    multiple() {
      this.$store.dispatch({
        type: MULTIPLE_ACTION,
        payload: {
          inc: 10,
          mul: 2
        }
      })
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