import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Login from './login/login'
import Register from './register/register'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)
Vue.use(ElementUI)

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
var app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
console.log(app)
console.log(Login)
