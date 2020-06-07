import API from '../../boot/API'

const state = {
  questions: []
}

const getters = {
  questions: state => state.questions
}

const mutations = {
  SET_POSTS (state, payload) {
    state.questions = payload
  }
}

const actions = {
  loadQuestions ({ commit }) {
    return new Promise((resolve, reject) => {
      API.get('api/questions')
        .then(response => {
          console.log(response.data.data)
          commit('SET_POSTS', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createQuestion ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post('api/questions', data)
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
