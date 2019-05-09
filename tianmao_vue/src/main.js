import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/index'
import * as $http from './requests'
import store from './store'
Vue.prototype.$http = $http

Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
