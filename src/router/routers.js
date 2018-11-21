
import Home from '@/views/Home.vue'

const routers = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/activitie',
        name: 'activitie',
        component: () => import('@/views/Activitie.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        // component: () => import( '@/views/cart/index.js')
        component: () => import('@/views/goods/index.vue')
    }, {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/index.vue')
    }
]
export default routers