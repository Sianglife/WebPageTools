import { createRouter, createWebHistory } from 'vue-router'
import {home,math} from '@/router/list'
const router = createRouter({
  history: createWebHistory(),
  routes: home.concat(math)
})

export default router
