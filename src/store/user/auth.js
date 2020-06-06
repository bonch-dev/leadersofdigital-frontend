import API from '../../boot/API'

const state = {
  info: null
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
  auth ({ commit }, data) {
    console.log(123)
    return new Promise((resolve, reject) => {
      API.get('provider/vkontakte', { params: { callback_url: 'http://127.0.0.1/callback/' } })
        .then(response => {
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
