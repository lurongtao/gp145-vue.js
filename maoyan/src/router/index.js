import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from 'pages/index/Layout'

import Movies from 'pages/index/movies/Movies'
import Intheaters from 'pages/index/movies/Intheaters'
import Comingsoon from 'pages/index/movies/comingsoon/Comingsoon'

import Theaters from 'pages/index/Theaters'
import Profile from 'pages/index/Profile'
import Details from 'pages/details/Details'
import City from 'pages/city/City'
import Test from 'pages/details/Test'

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
  },

  {
    path: '/city',
    name: 'city',
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
