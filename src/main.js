import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 将axios写入vue的原型
Vue.prototype.axios = axios

Vue.config.productionTip = false

// // 引入一个 bus 总线，便于不同组件间通信
// const bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
