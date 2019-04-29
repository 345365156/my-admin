import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Login from '../pages/Login'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})
