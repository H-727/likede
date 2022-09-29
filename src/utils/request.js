import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede/',
  timeout: 5000
})
const item = 100000000
request.interceptors.request.use(config => {
  if (store.state.user.token) {
    // config.headers.Authorization = `Bearer ${store.state.user.token}`
    if (+new Date() - store.state.user.time > item) {
      store.dispatch('user/LOGOUT')
      router.push('/login')
      return Promise.reject(new Error('token 超时'))
    }
  }
  return config
},
error => {
  return Promise.reject(error)
})
request.interceptors.response.use(response => {
  return response
},
error => {
  if (error.response?.status === 401) {
    store.dispatch('user/logout')
    router.push('/login')
    Message.error('token 失效')
  } else {
    Message.error(error.message)
  }
})
export default request
