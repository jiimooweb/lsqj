
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/mallIndex'
    },
    {
        name: 'user',
        component: () => import('./views/user'),
        meta: {
            title: '会员中心'
        }
    },
    {
        name: 'cart',
        component: () => import('./views/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'goods',
        component: () => import('./views/goods'),
        meta: {
            title: '商品详情'
        }
    },
    {
        name: 'mallIndex',
        component: () => import('./views/mallIndex'),
        meta: {
            title: '绿水清江商城'
        }
    },
    {
        name: 'order',
        component: () => import('./views/order'),
        meta: {
            title: '订单'
        }
    },
    {
        name: 'orderDetail',
        component: () => import('./views/orderDetail'),
        meta: {
            title: '订单详情'
        }
    },
    {
        name: 'share',
        component: () => import('./views/share'),
        meta: {
            title: '分享'
        }
    }, {
        name: 'lottery',
        component: () => import('./views/lottery'),
        meta: {
            title: '抽奖活动'
        }
    },{
        name: 'coupons',
        component: () => import('./views/coupons'),
        meta: {
            title: '奖券'
        }
    },{
        name: 'destroyCoupon',
        component: () => import('./views/destroyCoupon'),
        meta: {
            title: '核销奖券'
        }
    },
    {
        name: 'shareManage',
        component: () => import('./views/shareManage'),
        meta: {
            title: '分享任务管理'
        }
    },
    {
        name: 'goodsList',
        component: () => import('./views/goodsList'),
        meta: {
            title: '商品列表'
        }
    },
    {
        name: 'goodsType',
        component: () => import('./views/goodsType'),
        meta: {
            title: '分类列表'
        }
    },
    {
        name: 'reservation',
        component: () => import('./views/reservation'),
        meta: {
            title: '活动预约'
        }
    },
    {
        name: 'paySuccess',
        component: () => import('./views/paySuccess'),
        meta: {
            title: '支付成功'
        }
    },{
        name: 'ticket',
        component: () => import('./views/ticketPage'),
        meta: {
            title: '套餐'
        },
        children:[
            {
                name: 'ticketList',
                path: '/ticketList',
                component: () => import('./views/ticketList'),
                meta: {
                    title: '套餐列表'
                }
            },
            {
                name: 'ticketDetail',
                path: '/ticketDetail',
                component: () => import('./views/ticketDetail'),
                meta: {
                    title: '套餐详情'
                }
            },
            {
                name: 'ticketOrder',
                path: '/ticketOrder',
                component: () => import('./views/ticketOrder'),
                meta: {
                    title: '套餐订单'
                }
            },
            {
                name: 'ticketOrderList',
                path: '/ticketOrderList',
                component: () => import('./views/ticketOrderList'),
                meta: {
                    title: '订单列表'
                }
            },
            {
                name: 'ticketOrderDetail',
                path: '/ticketOrderDetail',
                component: () => import('./views/ticketOrderDetail'),
                meta: {
                    title: '订单详情'
                }
            }
        ]
    },
    {
        name: 'destroyTicket',
        path: '/destroyTicket',
        component: () => import('./views/destroyTicket'),
        meta: {
            title: '核销套餐'
        }
    },
    {
        name: 'manageTicketOrder',
        path: '/manageTicketOrder',
        component: () => import('./views/manageTicketOrder'),
        meta: {
            title: '管理员套餐列表'
        }
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};
