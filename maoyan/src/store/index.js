import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import scroll from './scroll'
import cities from './cities'

export default new Vuex.Store({
  modules: {
    scroll,
    cities
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
