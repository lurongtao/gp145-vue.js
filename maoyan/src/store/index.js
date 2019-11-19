import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import scroll from './scroll'

export default new Vuex.Store({
  modules: {
    scroll
  },

  state: {
    isSticky: false,
  },

  mutations: {
    setSticky(state, payload) {
      state.isSticky = payload
    }
  },

  actions: {
  }
})
