// import api from '../../api'
import api from 'model'
// import createDb from '../../../server/db/db'
//
// const db = createDb()

export default {
  login ({ commit }, pramas) {
    return new Promise((resolve, reject ) => {
      api.gaLogin(pramas).then(response => {
        const data = response.msg;
        console.log(data);
        commit('doLogin', data)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject ) => {
      api.getUserInfo({bulid_time:new Date().getTime()}).then(response => {
        const data = response.msg;
        commit('doLogin', data)
      })
    })
  },
  async getCities({ commit }) {
    console.log(1111111111)
    const resp = await api.getCitys()
    const data = resp.msg;
    console.log(resp)
    commit('getCities', data)
    return resp
    //  return api.getCitys().then(resp => {
    //   console.log('resp', resp);
    //   const data = resp.msg;
    //   commit('getCities', data)
    //   // resolve(resp)
    //   // return Promise.resolve(resp)
    // })
    // .catch(err => {
    //   // handleError(err)
    //   console.log(err);
    //   // reject(err)
    // })
    // return new Promise((resolve, reject ) => {
    //   console.log(2222222)
    //   api.getCitys().then(resp => {
    //     console.log('resp', resp);
    //     const data = resp.msg;
    //     commit('getCities', data)
    //     resolve(resp)
    //   })
    //   .catch(err => {
    //     // handleError(err)
    //     console.log(err);
    //     reject(err)
    //   })
    // })
  },
  getPos({ commit }, pramas) {
    return new Promise((resolve, reject ) => {
      api.getAdPos(pramas).then(response => {
        const data = response.msg;
        commit('getPos', data)
        // resolve(response)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}
