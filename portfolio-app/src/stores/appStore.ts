import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({ navActive: true, }),
  getters: {
    isNavActive: (state) => state.navActive,
  },
  actions: {
    setNavState(navState: boolean) {
      this.navActive = navState;
    },
  }
})