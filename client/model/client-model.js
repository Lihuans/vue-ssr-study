import axios from 'axios'
import request from '../api/request'
import api from '../../server/api'

let reqR = request('https://hrtest.shixiseng.com/api/v1') //直接请求后端接口
let req = request('/api')
let loginReq = request()

export default {
    login (data) {
      return loginReq.post(api.login, data)
    },
    getIndustry (data) {
      // return req.get(api.getIndustry, {params: data})
      return reqR.get(api.getIndustry, {params: data})
    },
    getCitys(data) {
      return req.get(api.getCities, data)
    }
}
