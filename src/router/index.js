import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnotherView from '@/views/AnotherView.vue'
import GALLERY from '@/views/GALLERY.vue'
import CONTACT from '@/views/CONTACT.vue'
import DISENODEINFORMACION from '@/views/DISENODEINFORMACION.vue'
import PROGRAMACION from '@/views/PROGRAMACION.vue'  
import WEB from '@/views/WEB.vue'
import POSTERS from '@/views/POSTERS.vue'  


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
    },
    {
      path: '/CONTACT',
      name: 'CONTACT',
      component: CONTACT
    },
    {
      path: '/DISENODEINFORMACION',
      name: 'DISENODEINFORMACION',
      component: DISENODEINFORMACION
    },
    {
      path: '/Programacion',
      name: 'Programacion',
      component: PROGRAMACION
    },
    {
      path: '/Posters',
      name: 'Posters',
      component: POSTERS
    },
    {
      path: '/Web',
      name: 'Web',
      component: WEB
    }
  ]
})

export default router
