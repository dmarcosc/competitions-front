import { Module } from 'vuex'
import { StateUi } from './types'
import { RootStore } from '@/store/rootStore'

const getDefaultStateModal = () => {
  return {
    open: false,
    text: '',
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
    openDialog (state, { text }) {
      state.modal = {
        text: text,
        open: true,
        props: {}
      }
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
    openDialog ({ commit }, { text }) {
      commit('openDialog', { text })
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
