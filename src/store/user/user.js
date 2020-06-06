import API from '../../boot/API'

const state = {
  user: {},
  userPublic: {}
}

const getters = {
  user: state => state.user,
  userPublic: state => state.userPublic
}

const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  },
  SET_PUBLIC (state, payload) {
    state.userPublic = payload
  }
}

const actions = {
  loadUser ({ commit }) {
    return new Promise((resolve, reject) => {
      API.get('api/users/me')
        .then(response => {
          commit('SET_USER', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loadUserPublic ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.get(`api/users/${id}`)
        .then(response => {
          commit('SET_PUBLIC', response.data)
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
