import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// // 引入一个 bus 总线，便于不同组件间通信
// const bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
