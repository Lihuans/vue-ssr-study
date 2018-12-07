import Vue from 'vue'
export default {
  updateCount (state, num) {
    state.count = num
  },
  doLogin (state, userInfo) {
    state.user = userInfo
  },
  getCities (state, data) {
    state.cities = data
    // Vue.set(state.cities,0,data)
    state.count = 11
    // console.log('121312314124========',state);
  },
  getPos (state, data) {
    console.log('121312314124========',data);
    state.data = data
  }
}
