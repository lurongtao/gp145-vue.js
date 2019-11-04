import Todoinput from './Todoinput.js'
import Todolist from './Todolist.js'

var app = new Vue({
  el: '#root',

  data: {
    keywords: ''
  },

  methods: {
    handleInputKeywords(keywords) {
      this.keywords = keywords
    }
  },

  components: {
    Todoinput,
    Todolist
  }
})