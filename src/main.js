import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1. 导入组件库
import Vant, { Toast } from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'

// 引入axios
import axios from 'axios'
// 原型绑定 axios
Vue.prototype.$axios = axios

// 设置基准路径
axios.defaults.baseURL = "http://157.122.54.189:9083"

// 设置全局过滤器,如果获取到的数据图片路径不完整则补全
Vue.filter('fixImgUrl', (oldUrl) => {
  if (oldUrl.indexOf("http") > -1) {
    return oldUrl
  } else {
    return axios.defaults.baseURL + oldUrl
  }
})

// 设置请求拦截器
axios.interceptors.request.use(config => {
  if (!config.headers.Authorization && localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  };
  return config;

});

// 设置拦截器同意拦截
axios.interceptors.response.use(res => {
  const errCodePattern = /^4\d{2}$/
  // 如果没有token就登入的话显示错误信息
  if (errCodePattern.test(res.data.statusCode)) {
    Toast.fail(res.data.message || "系统错误")
  }
  // 如果后台捕获不到token的话就跳回登录页
  if (res.data.message === "用户信息验证失败") {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.replace("/login");
  }

  return res;
});
Vue.config.productionTip = false

// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
