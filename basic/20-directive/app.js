import test2, { test } from './test.js'

// Vue.directive('font', function(el, binding) {
//   let { arg, modifiers, value } = binding
  
//   Object.keys(modifiers).forEach((value, index) => {
//     // el.style['font-weight'] = value
//   })
//   el.style[arg] = value
// })

var app = new Vue({
  el: '#root',

  directives: {
    'font': function(el, binding) {
      let { arg, modifiers, value } = binding
      
      Object.keys(modifiers).forEach((value, index) => {
        // el.style['font-weight'] = value
      })
      el.style[arg] = value
    }
  },

  data: {
    title: 'hello'
  },

  components: {
    test,
    test2
  }
})