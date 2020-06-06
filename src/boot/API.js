import axios from 'axios'

export default axios.create({
  baseURL: 'https://leadersofdigital-backend.server.bonch.dev/',
  withCredentials: false,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    common: {
      Authorization: 'Bearer ' + localStorage.getItem('user-token')
    }
  }
})
