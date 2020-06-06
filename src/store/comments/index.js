import API from '../../boot/API'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
  karmaDown ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/comments/${id}/karmaDown`)
        .then(response => {
          //
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  karmaUp ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/comments/${id}/karmaUp`)
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
