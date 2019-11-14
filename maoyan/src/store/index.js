import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSticky: false
  },
  mutations: {
    setSticky(state, payload) {
      state.isSticky = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
