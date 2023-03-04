import { createRouter, createWebHashHistory } from 'vue-router'
import { home, math, chemistry, error404 } from '@/router/list'
const router = createRouter({
  history: createWebHashHistory(),
  routes: home.concat(math, chemistry, error404)
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}－飛翔工具箱`;
  }
  next();
})
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}－飛翔小工具箱`;
  }
})
export default router
