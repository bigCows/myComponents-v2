import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard,
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout/index.vue')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('../views/a.vue')
  },
  {
    path: '/b',
    name: 'b',
    component: () => import('../views/b.vue')
  },
  {
    path: '/c',
    name: 'c',
    component: () => import('../views/c.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
