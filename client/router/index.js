import Vue from 'vue'
import Router from 'vue-router'
import utils from '../utils/util'

Vue.use(Router)

export function createRouter() {
  const router =  new Router({
    mode: 'history',
    routes: [
      { path: '/',
        component: () => import('../components/layout.vue'),
        children: [
          { path: '/', component: () => import('../components/Foo.vue') },
          { path: '/index', component: () => import('../../pages/index.vue') },
          { path: '/bar', component: () => import('../components/Bar.vue') },
          { path: '/baz', component: () => import('../components/Baz.vue') },
        ]
      },
      { path: '/login', component: () => import('../../pages/login.vue') }
    ]
  });

  return router
}
