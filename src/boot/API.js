import axios from 'axios'

export default axios.create({
  baseURL: 'https://leadersofdigital-backend.server.bonch.dev/',
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})
