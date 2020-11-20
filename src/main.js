import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'

// 引入axios
import axios from 'axios'
// 原型绑定 axios
Vue.prototype.$axios = axios


Vue.config.productionTip = false

// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

//基准路径

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
