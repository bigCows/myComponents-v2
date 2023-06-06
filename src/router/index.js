import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
