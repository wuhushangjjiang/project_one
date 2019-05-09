import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/index'
import * as $http from './requests/index'

Vue.prototype.$http = $http
Vue.config.productionTip = false
Vue.use(MintUI)

Vue.directive('anthor', {
  inserted: function (el, binding) {
    el.onclick = function () {
      document.documentElement.scrollTop = document.querySelector(binding.value).offsetTop
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
