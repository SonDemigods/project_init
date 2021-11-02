export default [{
  path: '/Home',
  name: 'Home',
  meta: {
    title: '首页',
    menuHide: false
  },
  component: () => import(/* webpackChunkName: "Home" */ '@/views/System/Home/index.vue')
}, {
  path: '/InitType',
  name: 'InitType',
  meta: {
    title: '创建项目',
    menuHide: false
  },
  component: () => import(/* webpackChunkName: "Main" */ '@/layout/Main/index.vue'),
  children: [
    {
      path: '/InitPageByVue',
      name: 'InitPageByVue',
      meta: {
        title: 'Vue',
        icon: 's-grid',
        menuHide: false
      },
      component: () => import(/* webpackChunkName: "InitPageByVue" */ '@/views/Business/InitPageByVue/index.vue')
    },
    {
      path: '/InitPageByReact',
      name: 'InitPageByReact',
      meta: {
        title: 'React',
        icon: 's-grid',
        menuHide: false
      },
      component: () => import(/* webpackChunkName: "InitPageByReact" */ '@/views/Business/InitPageByReact/index.vue')
    }
  ]
}]
