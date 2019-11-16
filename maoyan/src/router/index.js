import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from 'pages/index/Layout'

import Movies from 'pages/index/movies/Movies'
import Intheaters from 'pages/index/movies/Intheaters'
import Comingsoon from 'pages/index/movies/comingsoon/Comingsoon'

import Theaters from 'pages/index/Theaters'
import Profile from 'pages/index/Profile'
import Details from 'pages/details/Details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/movies'
  },

  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'movies',
        name: 'movies',
        component: Movies,
        redirect: '/index/movies/intheaters',
        children: [
          {
            path: 'intheaters',
            name: 'intheaters',
            meta: 1,
            component: Intheaters
          },
          {
            path: 'comingsoon',
            name: 'comingsoon',
            meta: 2,
            component: Comingsoon
          }
        ]
      },
      {
        path: 'theaters',
        name: 'theaters',
        component: Theaters
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      }
    ]
  },

  {
    path: '/details',
    name: 'details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 100
    }
    // return false
  }
})

export default router
