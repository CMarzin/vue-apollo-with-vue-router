import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ user: {} as { id: number, name: string}, }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser(user: { id: number, name: string}) {
      this.user = user
    },
  },
})