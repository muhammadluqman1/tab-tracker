// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'

Vue.config.productionTip = false
const vuetifyOptions = {}
Vue.use(Vuetify)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions), 
  router,
  store,
  components: { App },
  template: '<App/>'
})
