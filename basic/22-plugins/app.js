import MyPlugin from './MyPlugin.js'

Vue.use(MyPlugin, {
  type: 'leve1'
})

var app = new Vue({
  el: '#root',

  data: {
    title: 'hello'
  },

  mounted() {
    // Vue.$open()
    console.log(Vue.$gp)
    this.$getName('gp-145')
  },


})