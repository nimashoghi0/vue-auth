import { createRouter, createWebHistory } from 'vue-router'

import DemoPage from '@/pages/DemoPage.vue'
import IndexPage from '@/pages/IndexPage.vue'
import LoginPage from '@/pages/Login.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/login',
    component: LoginPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },  
  {
    path: '/demo/',
    component: DemoPage,
    meta: {
      title: 'Demo title',
      auth:true
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
