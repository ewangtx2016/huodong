import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Explain from '@/components/Explain'
import Login from '@/components/Login'
import Myjoin from '@/components/Myjoin'
import Mystart from '@/components/Mystart'
import Sign from '@/components/Sign'
import Userdetail from '@/components/Userdetail'
import Nojoin from '@/components/Nojoin'
import Nostart from '@/components/Nostart'
import Listdetail from '@/components/Listdetail'
import Rotate from '@/components/Rotate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/listdetail',
      component: Listdetail,
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
          path: 'nojoin',
          component: Nojoin
        },
        {
          path: 'mystart',
          component: Mystart
        },
        {
          path: 'nostart',
          component: Nostart
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

    {
      path: '/rotate',
      name:'Rotate',
      component:Rotate
    }
  ]
})
