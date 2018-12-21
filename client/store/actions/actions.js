import api from 'model'

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
  getIndustry({ commit }) {
    return new Promise((resolve, reject ) => {
      api.getIndustry().then(response => {
        const data = response.msg;
        commit('getUserInfo', data);
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getCities({ commit }) {
    return new Promise((resolve, reject ) => {
      api.getCitys().then(resp => {
        console.log('resp', resp);
        const data = resp.msg;
        commit('getCities', data)
        resolve(resp)
      })
      .catch(err => {
        console.log(err);
        reject(err)
      })
    })
  }
}
