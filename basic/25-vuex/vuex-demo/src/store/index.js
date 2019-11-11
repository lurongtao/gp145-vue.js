import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT_MUTATION, DECREMENT_MUTATION, MULTIPLE_MUTATION } from './mutation-types'
import { INCREMENT_ACTION, DECREMENT_ACTION, MULTIPLE_ACTION } from './action-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    [INCREMENT_MUTATION](state, data) {
      state.count += data.payload
    },

    [DECREMENT_MUTATION](state, data) {
      state.count -= data.payload
    },

    [MULTIPLE_MUTATION](state, data) {
      state.count *= data.payload
    }
  },

  actions: {
    [INCREMENT_ACTION]({ commit }, action) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit({
            type: INCREMENT_MUTATION,
            payload: action.payload
          })
          resolve()
        }, 1000)
      })
    },

    [DECREMENT_ACTION]({ commit, state }, action) {
      setTimeout(() => {
        commit({
          type: DECREMENT_MUTATION,
          payload: action.payload
        })
      }, 1000)
    },

    async [MULTIPLE_ACTION](context, action) {
      await context.dispatch({
        type: INCREMENT_ACTION,
        payload: action.payload.inc
      })
      context.commit({
        type: MULTIPLE_MUTATION,
        payload: action.payload.mul
      })
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