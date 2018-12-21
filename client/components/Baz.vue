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
        return store.dispatch('getIndustry')
      },
      computed: {
        userInfo () {
          // this.$store.dispatch('getUserInfo');
          return this.$store.state.userInfo
        }
      },
      mounted () {
        // this.$store.dispatch('getUserInfo');
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
