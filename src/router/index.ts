import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue')
  },
  {
    path: '/profile/detail',
    name: 'Detail',
    component: () => import('../views/profile/Detail.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../views/apply/Apply.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/create/Create.vue')
  },
  {
    path: '/create/generalParams',
    name: 'GeneralParams',
    component: () => import('../views/create/GeneralParams.vue')
  },
  {
    path: '/create/creationRequirements',
    name: 'CreationRequirements',
    component: () => import('../views/create/CreationRequirements.vue')
  },
  // {
  //   path: '/finish',
  //   name: 'Finish',
  //   component: () => import('../views/finish/index.vue'),
  //   meta: { requiresAuth: true },
  //   props: true
  // },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/error404/Error404.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
