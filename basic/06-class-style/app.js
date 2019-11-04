let app = new Vue({
  el: '#root',
  data: {
    title: 'hello',
    currentIndex: 0,
    list: [
      'wonderful',
      'perfect',
      'nice',
      'greet',
      'good'
    ]
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index
    }
  },
})