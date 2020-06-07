import API from '../../boot/API'

const state = {
  initiatives: {}
}

const getters = {
  initiatives: state => state.initiatives
}

const mutations = {
  SET_INITIATIVES (state, payload) {
    state.initiatives = payload
  }
}

const actions = {
  loadInitiatives ({ commit }) {
    return new Promise((resolve, reject) => {
      API.get('api/initiatives')
        .then(response => {
          commit('SET_INITIATIVES', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  rateInitiative ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/initiatives/${id}/rate`)
        .then(response => {
          // this.actions.loadInitiatives()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  unrateInitiative ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/initiatives/${id}/unrate`)
        .then(response => {
          // this.actions.loadInitiatives()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createInitiative ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post('api/initiatives', data)
        .then(response => {
          //
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
