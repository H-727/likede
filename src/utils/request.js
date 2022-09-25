import axios from 'axios'
const request = axios.create({
  baseURL: 'https://likede2-java.itheima.net',
  timeout: 5000
})

export default request
