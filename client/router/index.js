import Vue from 'vue'
import Router from 'vue-router'
import utils from '../utils/util'

Vue.use(Router)

export function createRouter() {
  const router =  new Router({
    mode: 'history',
    routes: [
      { path: '/',
        component: (resolve) => require(['@/components/layout.vue'], resolve),
        children: [
          { path: '/', component: (resolve) => require(['@/components/Foo.vue'], resolve) },
          { path: '/index', component: (resolve) => require(['@/pages/index.vue'], resolve) },
          { path: '/bar', component: (resolve) => require(['@/components/Bar.vue'], resolve) },
          { path: '/baz', component: (resolve) => require(['@/components/Baz.vue'], resolve) },
        ]
      },
      { path: '/login', component: (resolve) => require(['@/pages/login.vue'], resolve) }
    ]
  });

  return router
}
