import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers.js'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {
  //添加进入路由前执行的动作

  next()
})

router.afterEach(to => {
  //进入路由后执行的动作
  window.scrollTo(0, 0)
})

export default router
