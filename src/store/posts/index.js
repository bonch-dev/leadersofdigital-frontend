import API from '../../boot/API'

const state = {
  post: {},
  posts: []
}

const getters = {
  post: state => state.post,
  posts: state => state.posts
}

const mutations = {
  SET_POSTS (state, payload) {
    state.posts = payload
  },
  SET_POST (state, payload) {
    state.post = payload
  }
}

const actions = {
  loadPosts ({ commit }) {
    return new Promise((resolve, reject) => {
      API.get('api/posts')
        .then(response => {
          commit('SET_POSTS', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loadPost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.get(`api/posts/${id}`)
        .then(response => {
          commit('SET_POST', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createPost ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post('api/posts', data)
        .then(response => {
          //
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  ratePost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/posts/${id}/rate`)
        .then(response => {
          // this.actions.loadPosts()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  unratePost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/posts/${id}/unrate`)
        .then(response => {
          // this.actions.loadPosts()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  karmaUpPost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/posts/${id}/karmaUp`)
        .then(response => {
          // this.actions.loadPosts()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  karmaDownPost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/posts/${id}/karmaDown`)
        .then(response => {
          // this.actions.loadPosts()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  postComment ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post(`api/posts/${data.id}/comment`, { text: data.text })
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
