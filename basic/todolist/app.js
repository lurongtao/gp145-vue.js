var app = new Vue({
  el: '#root',

  data: {
    list: ['task 1'],
    inputValue: ''
  },

  methods: {
    handleKeyup() {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },

    handleClick(index) {
      this.list.splice(index, 1)
    }
  }
})