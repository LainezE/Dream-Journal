import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import Login from '@/components/Login'
import DreamJournal from '@/components/DreamJournal'
import CreateDream from '@/components/CreateDream'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/DreamJournal',
      name: 'DreamJournal',
      component: DreamJournal
    },
    {
      path: '/CreateDream',
      name: 'CreateDream',
      component: CreateDream
    }
  ]
})
