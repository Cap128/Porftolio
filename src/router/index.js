import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnotherView from '@/views/AnotherView.vue'
import GALLERY from '@/views/GALLERY.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AnotherView
    }, 
    {
      path: '/gallery',
      name: 'gallery',
      component: GALLERY
    }

  ]
})

export default router
