import store from 'store'
let { id, nm } = store.get('currentCity') || { id: 1, nm: '北京' }
const state = {
  cityid: id,
  nm
}

const mutations = {
  setCity(state, {id, nm}) {
    state.cityid = id
    state.nm = nm
  }
}

const actions = {
  saveCity({commit}, payload) {
    commit('setCity', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}