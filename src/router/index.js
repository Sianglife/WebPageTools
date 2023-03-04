import { createRouter, createWebHashHistory } from 'vue-router'
import { home, math, chemistry } from '@/router/list'
const router = createRouter({
  history: createWebHashHistory(),
  routes: home.concat(math, chemistry)
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}－飛翔小工具`;
  }
  next();
})
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}－飛翔小工具`;
  }
})
export default router
