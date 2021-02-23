import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '/finish',
  //   name: 'Finish',
  //   component: () => import('../views/finish/index.vue'),
  //   meta: { requiresAuth: true },
  //   props: true
  // },
  // {
  //   path: '*',
  //   name: 'Error404',
  //   component: () => import('../views/error404/Error404.vue'),
  //   props: true
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
