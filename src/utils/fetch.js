import axios from 'axios'

const service = axios.create({
  // baseURL: 'http://admintest.happymmall.com',
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, err => {
  console.error(err, ' in fetch.js')
  return Promise.reject(err)
})

// respone拦截器
service.interceptors.response.use(
  ({ data }) => {
    if (data.status === 0) return data.data
    else if (data.status === 10) {
      console.log(data, ' 没有登陆')
      // doLogin()
      return Promise.reject(data.msg || data.data)
    } else {
      return Promise.reject(data.msg || data.data)
    }
  },
  err => {
    console.error(err, ' in fetch.js')
    return Promise.reject(err.msg)
  }
)

/**
 * 跳转登陆
 */
const doLogin = () => window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)

export default service
