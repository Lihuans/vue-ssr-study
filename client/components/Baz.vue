<template>
  <div>
    <h1>我是 Baz</h1>
    <p v-for="item in userInfo">{{item.name}}</p>
  </div>
</template>

<script>
    export default {
      name: "baz",
      asyncData ({ store, router }) {
        return store.dispatch('getUserInfo')
      },
      computed: {
        userInfo () {
          return this.$store.state.userInfo
        }
      },
      methods: {

      }
    }
</script>

<style scoped>
  p{
    text-align: left;
  }
</style>
