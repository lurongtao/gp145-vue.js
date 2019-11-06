import { Comp1 } from './Comp1.js'
import { Comp2 } from './Comp2.js'
import { Comp3 } from './Comp3.js'
var app = new Vue({
  el: '#root',

  data: {
    currentComp: Comp1,
    
    comps: {
      Comp1,
      Comp2,
      Comp3
    },

    isShow: true
  },

  components: {
    Comp1,
    Comp2,
    Comp3
  },

  methods: {
    handleClick(value) {
      this.currentComp = value
    },

    handleNavClick(type) {
      this.isShow = (type === 'comp')
    }
  },
})