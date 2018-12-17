import axios from 'axios'
import request from '../api/request'

let reqR = request('https://hrtest.shixiseng.com/api/v1') //直接请求后端接口
let req = request('/api')
let loginReq = request()

export default {
    login (data) {
      return loginReq.post('/user/login', data)
    },
    getUserInfo (data) {
      // return req.get('/userinfo', {params: data})
      return reqR.get('/industryoptions', {params: data})
    },
    getCitys(data) {
      return req.get('/cities', data)
    }
}
