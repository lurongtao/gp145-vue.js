
import { Detail } from './Detail.js'

var app = new Vue({
  el: '#root',

  data: {
    currentComp: () => import('./List.js')
  },

  methods: {
    handleNavClick(type) {
      this.currentComp = type === 'list' ? List : Detail
    }
  }
})