import Vue from 'vue'
import App from './App.vue'
import * as VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { store } from './store'
import { router } from './backend'

Vue.use(VeeValidate)

// setup fake backend
import { configureFakeBackend } from './backend';
configureFakeBackend();


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
