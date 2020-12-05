import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1. 导入组件库
// import Vant, { Toast } from 'vant'
// // 2. 引入组件 css 文件
// import 'vant/lib/index.css'
// // 3. 注册 vant ui 组件库的标签
// Vue.use(Vant)

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(Field)
Vue.use(ActionSheet)
Vue.use(Toast)
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/list/style'
import 'vant/lib/uploader/style'
import 'vant/lib/dialog/style'
import 'vant/lib/field/style'
import 'vant/lib/action-sheet/style'
import 'vant/lib/toast/style'

// 引入axios
import axios from './utils/axios'
// 原型绑定 axios
Vue.prototype.$axios = axios


// 设置全局过滤器,如果获取到的数据图片路径不完整则补全
Vue.filter('fixImgUrl', (oldUrl) => {
  if (oldUrl.indexOf("http") > -1) {
    return oldUrl
  } else {
    return axios.defaults.baseURL + oldUrl
  }
})




Vue.config.productionTip = false



// 引入Vuex
import Vuex from 'vuex'
import { ActionSheet, Dialog, Field, List, Tab, Tabs, Toast, Uploader } from 'vant'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    historyList: []
  },
  mutations: {
    addHistory(state, data) {
      if (state.historyList.indexOf(data) === -1) {
        state.historyList.push(data)
      }
    },
    recoverHistory(state, data) {
      state.historyList = data
    }
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
