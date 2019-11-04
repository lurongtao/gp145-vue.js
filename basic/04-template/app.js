var app = new Vue({
  el: '#root',

  data: {
    title: `world`,
    inputValue: 3
  },

  methods: {
    sum() {
      return 7
    }
  },

  watch: {
    inputValue(newValue) {
      console.log(newValue + 1)
    }
  }
})