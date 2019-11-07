
import { Detail } from './Detail.js'

var app = new Vue({
  el: '#root',

  provide: () => {
    return {
      name: '放牛班',
      rating: 9.8,
      changeName: function(value) {
        
      }
    }
  },

  data: {
    currentComp: () => import('./List.js'),
    title: 'aaa'
  },

  methods: {
    handleNavClick(type) {
      this.currentComp = type === 'list' ? List : Detail
    }
  },

  mounted() {
    this.handleNavClick()
  },

  myFunction: function() {
    console.log(0)
  }
})