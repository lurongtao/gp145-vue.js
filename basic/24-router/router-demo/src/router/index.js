import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../components/Movie'
import TV from '../components/TV'
import MovieDetail from '../components/MovieDetail'
import Detail from '../components/Detail'
import Page404 from '../components/Page404'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: (to) => {
      return 3 > 5 ? '/movie' : '/tv'
    }
  },
  {
    name: 'movie',
    alias: '/movie2',
    path: '/movie',
    component: Movie,
    children: [
      {
        name: 'moviedetail',
        path: 'detail/:id/:nm',
        component: MovieDetail
      }
    ]
  },
  {
    path: '/tv',
    component: TV
  },
  {
    name: 'detail',
    props: (route) => {
      return { nm: route.params.id }
    },
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/user-*',
    component: Page404
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router