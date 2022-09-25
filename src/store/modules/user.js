import { login } from '@/api'

export default {
  namespaced: true,
  state: {
    token: '',
    data: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_DATA(state, data) {
      state.data = data
    }
  },
  getters: {
    isLogin(state) {
      return !!state.token
    }
  },
  actions: {
    async LOGIN({ commit }, data) {
      try {
        const res = await login(data)
        commit('SET_TOKEN', res.data.token)
        commit('SET_DATA', res.data)
        console.log(res)
      } catch (error) {
        new Error(error)
      }
    }
  }
}
