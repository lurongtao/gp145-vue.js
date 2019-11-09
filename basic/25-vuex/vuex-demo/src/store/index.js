import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    [INCREMENT](state, data) {
      state.count += data.payload
    }
  },

  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    tripleCount(state) {
      return state.count * 3
    },
    addCount(state, getters) {
      return (num) => {
        return num + getters.doubleCount + getters.tripleCount
      }
    }
  }
})

export default store