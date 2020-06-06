import AuthModule from './auth'
import UserModule from './user'

export default {
  namespaced: true,
  modules: {
    auth: {
      ...AuthModule
    },
    user: {
      ...UserModule
    }
  }
}
