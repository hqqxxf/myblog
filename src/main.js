import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Login from './login/login'
import Register from './register/register'
import Index from './index/index'
import Home from './home/home'
import CreateBlog from './blog/createBlog'
import BlogDetail from './blog/blogDetail'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueResource)
// Vue.use(marked)
require('../static/css/reset.less')

// 3. Create the router
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/createBlog',
      name: 'createBlog',
      component: CreateBlog
    },
    {
      path: '/blogDetail/:id',
      component: BlogDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

