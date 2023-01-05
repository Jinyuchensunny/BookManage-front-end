import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

Vue.use(ElementUI, { size:'mini'});
import('element-ui/lib/theme-chalk/index.css')
import BookKind from '@/views/BookKind';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,BookKind},
  template: '<App/>'
})
