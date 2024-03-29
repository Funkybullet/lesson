import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
import StarRegister from '@/components/register/StarRegister'
import noteClass from '@/components/noteClass/noteClass'
import person from '@/components/person/person'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/login',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/register',
      name: 'StarRegister',
      component: StarRegister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta: {
        title: '用户'
      }
    }
  ]
})
