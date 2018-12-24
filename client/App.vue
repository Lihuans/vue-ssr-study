<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view :key="(new Date()).valueOf()"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  metaInfo: {
    title: 'App'
  }
}
</script>

<style>
/*@import '//at.alicdn.com/t/font_483193_zr6medyg0fre8kt9.css';*/
@import './assets/css/base.css';
@import '../static/fonts/font.css';
@import 'element-ui/lib/theme-chalk/index.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
}
</style>
