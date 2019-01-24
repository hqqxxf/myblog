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

import marked from 'marked'
import highlightjs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
marked.options({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlightjs.highlightAuto(code).value
  }
})
Vue.filter('marked', function (input) {
  return marked(input)
})
// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueResource)
// Vue.use(marked)
// Vue.use(highlightjs)
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
      path: '/createBlog/:id*',
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

