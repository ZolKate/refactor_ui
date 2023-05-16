import Vue from 'vue'
import Vuex from 'vuex'
import auth  from './modules/auth'
import error from './modules/error'
import notify from './modules/notify'
import orders from './modules/orders'
import config from './modules/config'
import user from './modules/user'
import apiHelper from './actions/apiHelper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    ...apiHelper
  },
  modules: {
    auth,
    error,
    notify,
    orders,
    config,
    user
  }
})