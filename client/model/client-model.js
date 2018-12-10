import axios from 'axios'
import request from '../api/request'

let req = request('/api')
let loginReq = request('/user')

export default {
    login (data) {
      return loginReq.post('/login', data)
    },
    getUserInfo (data) {
      return req.get('/userinfo', {params: data})
    },
    getCitys(data) {
      return req.get('/cities', data)
    }
}
