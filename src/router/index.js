import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component : () => import("../views/login.vue")
  },
  {
    path: '/signup',
    name: 'signup',
    component : () => import("../views/signup.vue")
  },
  {
    path: '/forgetpass',
    name: 'forgetpass',
    component : () => import("../views/forgetpass.vue")
  }

]

const router = new VueRouter({
  routes
})

export default router
