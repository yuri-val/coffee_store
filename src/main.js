// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FishUI from 'fish-ui'
import VueSlideoutPanel from 'vue2-slideout-panel'

import App from './App'
import router from './router'
import { store } from './store'

Vue.use(VueSlideoutPanel)
Vue.use(FishUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
