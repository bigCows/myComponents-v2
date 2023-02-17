import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashborad from '../views/dashborad'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashborad
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
