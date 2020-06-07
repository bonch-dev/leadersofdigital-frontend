import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import events from './events'
import initiatives from './initiatives'
import comments from './comments'
import posts from './posts'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      events,
      initiatives,
      comments,
      posts
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
