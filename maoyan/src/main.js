import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'assets/maoyan.css'
import 'assets/reset.css'
import 'assets/animation.css'
import './filters/img'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
