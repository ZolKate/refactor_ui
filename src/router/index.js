import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/orders',
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import('../views/Config.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
