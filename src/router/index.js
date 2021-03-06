import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '../views/Register'
import User from '../views/profile/User.vue'
import Edit from '../views/profile/Edit.vue'
import Follow from '@/views//profile/Follow'
import PostDetail from '../views/PostDetail'
import Star from '@/views/profile/Star'
import test from '@/views/test'
import MoreComment from '../views/MoreComment'
import Search from '../views/Search'
import Comment from '@/views/profile/Comment'
import AllComment from '@/views/profile/AllComment'
import Manage from '../views/Manage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/user',
    component: User,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/follow',
    component: Follow,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/postDetail/:id',
    component: PostDetail
  },
  {
    path: '/star',
    component: Star
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '/moreComment/:id',
    component: MoreComment
  },
  {
    path: '/search',
    component: Search,
    meta: {
      needAuth: true
    }
  },
  {
    path: "/comment",
    component: Comment,
    meta: {
      needAuth: true
    }
  },
  {
    path: "/allcomment",
    component: AllComment,
    meta: {
      needAuth: true
    }
  },
  {
    path: "/manage",
    component: Manage
  }


]

const router = new VueRouter({
  routes
})

// 设置全局路由，拦截所有跳转，执行回调函数
router.beforeEach((to, from, next) => {
  // 如果去的路径是个人中心页，验证是否有token
  if (to.meta.needAuth) {
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
