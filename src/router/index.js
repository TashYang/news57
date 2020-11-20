import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '../views/Register'
import User from '../views/profile/User.vue'
import Edit from '../views/profile/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: "Login",
    component: Login,
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
  }, {
    path: '/user',
    name: 'User',
    component: User,
  }, {
    path: '/edit',
    name: "Edit",
    component: Edit,
  }
]

const router = new VueRouter({
  routes
})

// 设置全局路由
router.beforeEach((to, from, next) => {
  // 如果去的路径是个人中心页，验证是否有token
  if (to.path === "/user" || to.path === "/edit") {
    if (localStorage.getItem('token')) {
      return next()
    } else {
      // 避免相同页面跳回自己的报错 .catch
      return router.push('/login').catch((err) => { })
    }
  }
  return next();
})

export default router
