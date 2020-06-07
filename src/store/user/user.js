import API from '../../boot/API'

const state = {
  me: {},
  selectedProfile: {
    karma: 0,
    influence: 0,
    name: 'name',
    photo: '../../statics/images/user-1.png'
  }
}

const getters = {
  me: state => state.me,
  selectedProfile: state => state.selectedProfile
}

const mutations = {
  SET_ME (state, payload) {
    state.me = payload
  },
  SET_SELECTED (state, payload) {
    state.selectedProfile = payload
  }
}

const actions = {
  loadMe ({ commit }) {
    return new Promise((resolve, reject) => {
      API.get('api/users/me')
        .then(response => {
          commit('SET_ME', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loadUser ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.get(`api/users/${id}`)
        .then(response => {
          commit('SET_SELECTED', response.data.data)
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
