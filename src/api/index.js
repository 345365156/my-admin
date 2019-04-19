import axios from 'axios'
import {env} from './config'
import {Message} from 'element-ui'

export const baseURL = env.deploy.testMode.server; // 请求地址 devMode：开发环境  testMode：测试环境  prodMode：生产环境

function apiAxios(method, url, params, response, contentType) {
  axios({
    headers: {
      'Content-Type': contentType,
      'Key': localStorage.getItem('userId'),
      'AccessToken': localStorage.getItem('accessToken')
    },
    method: method,
    url: baseURL + url,
    data: (method === 'POST' || method === 'PUT') ? JSON.stringify(params) : null,
    params: (method === 'GET' || method === 'DELETE') ? params : null,
    timeout: 10000
  }).then(function (res) {
    response(res)
  }).catch(function (err) {
    response(err)
  })
}

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log(config);
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.status >= 200 && res.status < 300) {
      return res // 返回
    } else {
      Message.error(res.data.result) // 请求失败
    }
  }, error => {
    console.log(error)
    let errorString = error.toString()
    if (errorString.includes('timeout')) {
      Message.error('请求超时')
    }
    return Promise.reject(error)
  })

export default {
  get: function (url, params, response, contentType) {
    return apiAxios('GET', url, params, response, contentType = 'application/json;charset=utf-8')
  },
  post: function (url, params, response, contentType) {
    return apiAxios('POST', url, params, response, contentType = 'application/json;charset=utf-8')
  },
  put: function (url, params, response, contentType) {
    return apiAxios('PUT', url, params, response, contentType = 'application/json;charset=utf-8')
  },
  delete: function (url, params, response, contentType) {
    return apiAxios('DELETE', url, params, response, contentType = 'application/json;charset=utf-8')
  }
}
