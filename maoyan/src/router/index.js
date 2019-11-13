import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from 'pages/index/Layout'
import Movies from 'pages/index/Movies'

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
        component: Movies
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
