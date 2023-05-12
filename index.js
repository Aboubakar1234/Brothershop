import { createRouter, createWebHistory } from 'vue-router'
import GuestView from '../views/GuestView.vue'

const routes = [
  {
    path: '/',
    name: 'guest',
    component: GuestView
  },
  {
    path: '/login',
    name: 'login',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
