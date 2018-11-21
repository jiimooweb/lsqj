import Vue from 'vue'
import Router from 'vue-router'
import routers from '@/router/routers.js'

Vue.use(Router)
const router = new Router({
  routers,
  mode: 'hash'
})

router.beforeEach((next) => {
  //添加进入路由前执行的动作

  next()
})

router.afterEach(to => {
  //进入路由后执行的动作
  window.scrollTo(0, 0)
})

export default router
