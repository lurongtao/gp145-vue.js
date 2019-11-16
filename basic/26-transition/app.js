var app = new Vue({
  el: '#root',

  data: {
    title: 'hello',
    show: true
  },

  methods: {
    handleClick() {
      this.show = !this.show
    }
  },
})