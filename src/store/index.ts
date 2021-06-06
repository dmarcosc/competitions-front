import Vue from 'vue'
import Vuex from 'vuex'
import { RootStore } from './rootStore'
import { ui, session, security } from './modules'

Vue.use(Vuex)

export default new Vuex.Store<RootStore>({
  modules: {
    ui,
    session,
    security
  },
  strict: process.env.NODE_ENV !== 'production'
})
