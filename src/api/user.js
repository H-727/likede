import request from '@/utils/request'

export const getImageCodeAPI = (clientToken) =>
  request({ url: '/api/user-service/user/imageCode/' + clientToken })

export const login = (data) => request({
  url: '/api/user-service/user/login',
  method: 'POST',
  data
})
