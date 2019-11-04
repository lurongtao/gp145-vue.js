var app = new Vue({
  el: '#root',

  data: {
    title: ''
  },

  beforeCreate() {
    console.log('beforeCreate.')
    // this.title = 'title 0'
  },

  created() {
    console.log('created.')
    this.title = 'title 1'
  },

  beforeMount() {
    console.log('beforeMount.')
    this.title = 'title 2'
  },

  render(h) {
    console.log('render.')
    return h(
      'div',
      {},
      this.title
    )
  },

  mounted() {
    console.log('mounted.')
    setInterval(() => {
      this.title = new Date().getTime()
    }, 1000)
  },

  beforeUpdate() {
    console.log('beforeUpdate.')
  },

  updated() {
    console.log('updated.')
  },
})