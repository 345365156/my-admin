// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import Api from './api/index'
import store from './store'
import router from './router'
import Element from 'element-ui'
import '@/common/styles/element-variables.scss'
import i18n from './common/language/index.js'
import 'normalize.css/normalize.css'
import '@/common/styles/index.scss' // global css
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './common/filters'
import '@/assets/icon/index.js'

Vue.use(Element, {
  size: 'medium', zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value)
});

Vue.prototype.axios = Axios;
Vue.prototype.$api = Api;

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: {App},
  template: '<App/>'
});
