import API from '../../boot/API'

const state = {
  questions: [],
  question: null
}

const getters = {
  questions: state => state.questions,
  question: state => state.question
}

const mutations = {
  SET_QUESTIONS (state, payload) {
    state.questions = payload
  },
  SET_QUESTION (state, payload) {
    state.questions = payload
  }
}

const actions = {
  loadQuestions ({ commit }) {
    return new Promise((resolve, reject) => {
      API.get('api/questions')
        .then(response => {
          commit('SET_QUESTIONS', response.data.data)
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
  },
  loadQuestion ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.get('api/questions/' + data)
        .then(response => {
          commit('SET_QUESTION', response.data.data)
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
