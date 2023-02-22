import axios from 'axios'
// axios 实例
const base = axios.create({
  baseURL: '/api',
  timeout: 5000
})
base.interceptors.response.use(res => {
  console.log(res)
  if (res.status === 200) {
    return res.data
  }
})
export default base
