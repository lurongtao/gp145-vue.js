import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../components/Movie'
import TV from '../components/TV'
import TV2 from '../components/TV2'
import TV3 from '../components/TV3'
import MovieDetail from '../components/MovieDetail'
import Detail from '../components/Detail'
import Page404 from '../components/Page404'
// import About from '../components/About'

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
    components: {
      default: TV,
      tv2: TV2,
      tv3: TV3
    }
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
    name: 'about',
    component: () => import('../components/About'),
    meta: 'aboutabout',
    path: '/about',
    beforeEnter: (to, from, next) => {
      next()
    },
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

// router.beforeEach((to, from, next) => {
//   if (from.name === 'about') {
//     if (confirm('你真的要离开吗？')) {
//       next()
//     }
//   } else {
//     next()
//   }

//   if (to.name === 'about') {
//     if (confirm('你真的要进来吗？')) {
//       next()
//     }
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

// router.afterEach((to, from) => {
//   // 善后工作
// })

export default router