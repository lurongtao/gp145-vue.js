const state = {
  position: 0,
  page: 0
}

const mutations = {
  setPosition(state, action) {
    state.position = action.position
  },
  setPage(state, action) {
    state.page = action.page
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}