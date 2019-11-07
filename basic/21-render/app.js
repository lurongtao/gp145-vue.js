import renderer from './render.js'

var app = new Vue({
  el: '#root',

  data: {
    title: 'hello'
  },

  components: {
    renderer
  }
})