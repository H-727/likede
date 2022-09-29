import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: ' ',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home'),
      meta: { title: '帝可得', icon: 'home' }
    }]
  },
  {
    path: '/task',
    meta: { title: '工单管理', icon: 'gongdan' },
    component: Layout,
    children: [
      {
        path: '/task/business',
        name: 'Business',
        component: () => import('@/views/task/business'),
        meta: { title: '运营工单' }
      },
      {
        path: '/task/operation',
        name: 'Operation',
        component: () => import('@/views/task/operation'),
        meta: { title: '运维工单' }
      }
    ]

  },
  {
    path: '/node',
    meta: { title: '点位管理', icon: 'dianwei' },
    component: Layout,
    children: [
      {
        path: '/node/region',
        name: 'Region',
        component: () => import('@/views/node/region'),
        meta: { title: '区域管理' }
      },
      {
        path: '/node/node',
        name: 'Node',
        component: () => import('@/views/node/node'),
        meta: { title: '点位管理' }
      },
      {
        path: '/node/partner',
        name: 'Partner',
        component: () => import('@/views/node/partner'),
        meta: { title: '合作商管理' }
      }
    ]
  },
  {
    path: '/vm',
    meta: { title: '设备管理', icon: 'shebei' },
    component: Layout,
    children: [
      {
        path: '/vm/index',
        name: 'Index',
        component: () => import('@/views/vm/index'),
        meta: { title: '设备管理' }
      },
      {
        path: '/vm/status',
        name: 'Status',
        component: () => import('@/views/vm/status'),
        meta: { title: '设备状态' }
      },
      {
        path: '/vm/type',
        name: 'Type',
        component: () => import('@/views/vm/type'),
        meta: { title: '设备类型管理' }
      }
    ]
  },
  {
    path: '/user',
    meta: { title: '人员管理', icon: 'renyuan' },
    component: Layout,
    children: [
      {
        path: '/user/index',
        name: 'UserIndex',
        component: () => import('@/views/user/index'),
        meta: { title: '人员列表' }
      },
      {
        path: '/user/user-task-stats',
        name: 'UserTaskStats',
        component: () => import('@/views/user/user-task-stats'),
        meta: { title: '人员统计' }
      },
      {
        path: '/user/user-work',
        name: 'UserWork',
        component: () => import('@/views/user/user-work'),
        meta: { title: '人员量列表' }
      }
    ]
  },
  {
    path: '/sku',
    meta: { title: '商品管理', icon: 'shangpin' },
    component: Layout,
    children: [
      {
        path: '/sku/sku-class',
        name: 'SkuClass',
        component: () => import('@/views/sku/sku-class'),
        meta: { title: '商品类型' }
      },
      {
        path: '/sku/sku',
        name: 'Sku',
        component: () => import('@/views/sku/sku'),
        meta: { title: '商品管理' }
      }
    ]

  },
  {
    path: '/policy',
    component: Layout,
    children: [{
      path: '/policy/index',
      name: 'Policy',
      component: () => import('@/views/policy'),
      meta: { title: '策略管理', icon: 'celue' }
    }]
  },
  {
    path: '/report',
    component: Layout,
    children: [{
      path: '/report/index',
      name: 'Report',
      component: () => import('@/views/report'),
      meta: { title: '订单管理', icon: 'dingdan' }
    }]
  },
  {
    path: '/order',
    component: Layout,
    children: [{
      path: '/order/index',
      name: 'Order',
      component: () => import('@/views/order'),
      meta: { title: '对账管理', icon: 'duizhang' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
// export const constantRoutes = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: false
//   },

//   {
//     path: '/404',
//     component: () => import('@/views/404'),
//     hidden: false
//   },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/home',
//     hidden: true,
//     children: [
//       {
//         path: 'home',
//         name: 'Home',
//         component: () => import('@/views/home'),
//         meta: { title: '帝可得', icon: '' }
//       }
//     ]
//     // children: [
//     //   {
//     //     path: 'home',
//     //     name: 'Home',
//     //     component: () => import('@/views/home')
//     //   },
//     //   {
//     //     path: 'policy/index',
//     //     name: 'policy',
//     //     component: () => import('@/views/policy')
//     //   },
//     //   {
//     //     path: 'order/index',
//     //     name: 'Order',
//     //     component: () => import('@/views/order')
//     //   },
//     //   {
//     //     path: 'report/index',
//     //     name: 'Report',
//     //     component: () => import('@/views/report')
//     //   },
//     //   {
//     //     path: 'task/business',
//     //     name: 'Business',
//     //     component: () => import('@/views/task/business')
//     //   },
//     //   {
//     //     path: 'task/operation',
//     //     name: 'Operation',
//     //     component: () => import('@/views/task/operation')
//     //   }
//     // ]
//   },

//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: false }
// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
