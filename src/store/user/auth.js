import API from '../../boot/API'

const state = {
  token: localStorage.getItem('user-token') || ''
}

const getters = {
  info: state => state.info
}

const mutations = {
  AUTH_SUCCESS (state, payload) {
    state.info = payload
  }
}

const actions = {
  LoadProfileInfo ({ commit }) {
    API.defaults.headers.common = { 'Authorization': 'Bearer ' + state.token }
    return new Promise((resolve, reject) => {
      API.get('api/users/me')
        .then(response => {
          console.log(response)
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
