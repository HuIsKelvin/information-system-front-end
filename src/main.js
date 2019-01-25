import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入 axios
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'

// 将axios写入vue的原型
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
