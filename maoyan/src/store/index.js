import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSticky: false,
    movieList: []
  },
  mutations: {
    setSticky(state, payload) {
      state.isSticky = payload
    },
    setData(state, data) {
      state.movieList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
