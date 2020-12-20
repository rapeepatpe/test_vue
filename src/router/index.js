import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component : () => import("../views/signup.vue")
  },
  {
    path: '/login',
    name: 'login',
    component : () => import("../views/login.vue")
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
