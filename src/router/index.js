import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '../views/Register'
import User from '../views/User'
import Edit from '../views/Edit'

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

export default router
