import Vue from 'vue'
// 引入element-ui，注意放置位置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
// 引入 axios
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'

Vue.use(ElementUI);

// 将axios写入vue的原型
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
