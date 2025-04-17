import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import MainPage from '@/views/MainPage.vue'
import billerByCategoryPage from '@/views/billerByCategoryPage.vue'
import biller from '@/views/biller.vue'
import billertest from '@/views/billertest.vue'
import rrCheckout from '@/views/rrCheckout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HomeView,

    },
    {
      path: '/',
      name: 'home',
      component: MainPage,

    },
    {
      path: '/biller',
      name: 'biller',
      component: billertest,

    },
    {
      path: '/rrcheckout',
      name: 'rrcheckout',
      component: rrCheckout,

    },
    {
      path: '/biller-by-category',
      name: 'billersByCategory',
      component: billerByCategoryPage,

    },
    //{
      //path: '/about',
     // name: 'about',
      //component: About,
      //props:true
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue'),
   // },

   { 
    path: '/:pathMatch(.*)*',
    name : "Not Found",
    component: NotFound 
   }
   

  ],
})

export default router
 
