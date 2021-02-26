import { Module } from 'vuex'
import { StateUi } from './types'
import { RootStore } from '@/store/rootStore'

const getDefaultStateModal = () => {
  return {
    open: false,
    component: '',
    props: {}
  }
}

const getDefaultTextMask = () => 'Cargando...'

export const ui: Module<StateUi, RootStore> = {
  namespaced: true,
  state: {
    modal: getDefaultStateModal(),
    mask: {
      text: getDefaultTextMask(),
      show: false
    },
    menu: {
      show: false
    }
  },
  mutations: {
    toggleMask (state, { text, show }) {
      state.mask = {
        text: text || getDefaultTextMask(),
        show
      }
    },
    openDialog (state, { component, props }) {
      state.modal.open = true
      state.modal.component = component
      state.modal.props = props
    },
    closeDialog (state) {
      state.modal = getDefaultStateModal()
    },
    toggleMenu (state) {
      state.menu.show = !state.menu.show
    },
    hideMenu (state) {
      state.menu.show = false
    }
  },
  actions: {
    showMask ({ commit }, { text }) {
      commit('toggleMask', { text, show: true })
    },
    hideMask ({ commit }) {
      commit('toggleMask', { show: false })
    },
    openDialog ({ commit }, { component, props }) {
      commit('openDialog', { component, props })
    },
    closeDialog ({ commit }) {
      commit('closeDialog')
    },
    toggleMenu ({ commit }) {
      commit('toggleMenu')
    },
    hideMenu ({ commit }) {
      commit('hideMenu')
    }
  },
  getters: {
    maskInfo (state) {
      return state.mask
    },
    dialogInfo (state) {
      return state.modal
    },
    menuInfo (state) {
      return state.menu
    }
  }
}
