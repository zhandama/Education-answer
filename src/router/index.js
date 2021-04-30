import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import My from '../pages/my/My.vue'
import AddMyInfo from '../pages/my/AddMyInfo.vue'

import test from '../pages/test.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home,
        meta: { hidetopbar: true, title:'学习'}
      },
      {
        path: '/my',
        component: My,
        meta: { leftArrow: true, title:'个人中心'}
      },
      {
        path: '/addmyinfo',
        component: AddMyInfo,
        meta: { hidefooter:true, title:'个人信息'}
      },
      {
        path: '/test',
        component: test,
        meta: { title:'测试页面'}
      }
    ]
})

export default router