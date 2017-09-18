import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Explain from '@/components/Explain'
import Login from '@/components/Login'
import Myjoin from '@/components/Myjoin'
import Mystart from '@/components/Mystart'
import Sign from '@/components/Sign'
import Userdetail from '@/components/Userdetail'
import Nojoin from '@/components/Nojoin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/userdetail',
      component: Userdetail,
      children:[
        {
          path:'myjoin',
          component:Myjoin

        },
        {
          path: 'mystart',
          component: Mystart
        },
        {
          path: 'nojoin',
          component: Nojoin
        },
      ]
    },
    {
      path: '/explain',
      component: Explain
    },
    {
      path: '/login',
      component: Login
    },


    {
      path: '/sign',
      component:Sign
    },
  ]
})
