import { login } from '@/api'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    token: '',
    data: {},
    time: 0
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_DATA(state, data) {
      state.data = data
    },
    SET_TIME(state, time) {
      state.time = time
    }
  },
  getters: {
    isLogin(state) {
      return !!state.token
    }
  },
  actions: {
    LOGOUT({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_DATA', {})
      router.push('/login')
    },
    async LOGIN({ commit }, data) {
      try {
        const res = await login(data)
        commit('SET_TOKEN', res.data.token)
        commit('SET_DATA', res.data)
        commit('SET_TIME', +new Date())
      } catch (error) {
        new Error(error.message)
      }
    }
  }
}
