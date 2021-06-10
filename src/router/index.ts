import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import env from '@/api/config/environment'

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
    path: '/apply/personalData',
    name: 'PersonalData',
    component: () => import('../views/apply/PersonalData.vue')
  },
  {
    path: '/apply/requirements',
    name: 'ApplyRequirements',
    component: () => import('../views/apply/ApplyRequirements.vue')
  },
  {
    path: '/apply/skills',
    name: 'ApplySkills',
    component: () => import('../views/apply/ApplySkills.vue')
  },
  {
    path: '/apply/extra',
    name: 'ApplyExtra',
    component: () => import('../views/apply/ApplyExtra.vue')
  },
  {
    path: '/apply/finish',
    name: 'ApplyFinish',
    component: () => import('../views/apply/ApplyFinish.vue'),
    props: true
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
    path: '/create/requirements',
    name: 'CreationRequirements',
    component: () => import('../views/create/CreationRequirements.vue')
  },
  {
    path: '/create/skills',
    name: 'CreationSkills',
    component: () => import('../views/create/CreationSkills.vue')
  },
  {
    path: '/create/extra',
    name: 'CreationExtra',
    component: () => import('../views/create/CreationExtra.vue')
  },
  {
    path: '/create/finish',
    name: 'CreationFinish',
    component: () => import('../views/create/CreationFinish.vue'),
    props: true
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/error404/Error404.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: env.getEnvVariable('BASE_URL'),
  routes
})

export default router
