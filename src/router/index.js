import { createRouter, createWebHashHistory } from 'vue-router'
import {home,math} from '@/router/list'

const router = createRouter({
  history: createWebHashHistory(),
  home,
  math
})

export default router
