import {
  createRouter,
  createWebHistory // history模式 地址栏不带 #
  // createWebHashHistory // hash模式 地址栏带 #
} from 'vue-router'

// console.log(import.meta.env.DEV)
// vite 中的环境变量 import.meta.env.BASE_URL 接收 vite.comfig.js 中的 base配置项
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') }, // 登录页
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/article/profile',
          component: () => import('@/views/user/ArticleUserProfile.vue')
        },
        {
          path: '/article/avatar',
          component: () => import('@/views/user/ArticleUserAvatar.vue')
        },
        {
          path: '/article/password',
          component: () => import('@/views/yser/ArticleUserPassword.vue')
        }
      ]
    }
  ]
})

export default router
