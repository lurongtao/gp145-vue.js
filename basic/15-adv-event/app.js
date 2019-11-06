import { child } from './child.js'
import './base-checkbox.js'

var app = new Vue({
  el: '#root',
  data: {
    lovingVue: true,
    title: {
      aaa: 0,
      bbb: 1
    },
    inputValue: 'aaa',
  },
  components: {
    child
  },
  methods: {
    handleClick() {
      console.log(0)
    },
    handleTitleChange (title) {
      console.log(title)
    },

    handleInput(e) {
      this.inputValue = e.target.value
    }
  },
})