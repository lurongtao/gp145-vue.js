import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../components/Movie'
import TV from '../components/TV'
import MovieDetail from '../components/MovieDetail'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    component: Movie,
    children: [
      {
        path: 'detail/:id/:nm',
        component: MovieDetail
      }
    ]
  },
  {
    path: '/tv',
    component: TV
  }
]

const router = new Router({
  routes
})

export default router