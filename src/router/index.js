import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '../views/Register'
import User from '../views/profile/User.vue'
import Edit from '../views/profile/Edit.vue'
import Follow from '@/views//profile/Follow'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  },
  {
    path: '/edit',
    name: "Edit",
    component: Edit,
  },
  {
    path: '/follow',
    name: 'Follow',
    component: Follow,
  }
]

const router = new VueRouter({
  routes
})

// 设置全局路由，拦截所有跳转，执行回调函数
router.beforeEach((to, from, next) => {
  // 如果去的路径是个人中心页，验证是否有token
  if (to.path === "/user" || to.path === "/edit") {
    if (localStorage.getItem('token')) {
      // 存在token就放行
      return next()
    } else {
      // 不存在就回到登录页
      // 避免相同页面跳回自己的报错 .catch告诉系统已经知晓这个错误，无需捕获
      return router.push('/login').catch((err) => { })
    }
  }
  return next();
})

export default router
