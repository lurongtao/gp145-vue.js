import MyComponent from "./MyComponent.js"

var app = new Vue({
  el: '#root',
  data: {
    title: '',
    inputValue: 'aa'
  },
  methods: {
    handleClick(num, e) {
      console.log(e)
    },
    handleDivClick() {
      console.log('div clicked.')
    },
    clear() {
      this.inputValue = ''
    },
    onClick() {
      console.log('clicked.')
    }
  },
})