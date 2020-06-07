import API from '../../boot/API'

const state = {
  events: [],
  event: {}
}

const getters = {
  events: state => state.events,
  event: state => state.event
}

const mutations = {
  SET_EVENTS (state, payload) {
    state.events = payload
  },
  SET_EVENT (state, payload) {
    state.event = payload
  }
}

const actions = {
  loadEvents ({ commit }) {
    return new Promise((resolve, reject) => {
      API.get('api/events')
        .then(response => {
          console.log(response.data.data)
          commit('SET_EVENTS', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loadEvent ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.get(`api/events/${id}`)
        .then(response => {
          commit('SET_EVENT', response.data.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  createEvent ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post('api/events', data)
        .then(response => {
          //
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  rateEvent ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/events/${id}/rate`)
        .then(response => {
          // this.actions.loadEvents()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  unrateEvent ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/events/${id}/unrate`)
        .then(response => {
          // this.actions.loadEvents()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  karmaUpEvent ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/events/${id}/karmaUp`)
        .then(response => {
          // this.actions.loadEvents()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  karmaDownEvent ({ commit }, id) {
    return new Promise((resolve, reject) => {
      API.post(`api/events/${id}/karmaDown`)
        .then(response => {
          // this.actions.loadEvents()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  eventComment ({ commit }, data) {
    return new Promise((resolve, reject) => {
      API.post(`api/events/${data.id}/comment`, { text: data.text })
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
