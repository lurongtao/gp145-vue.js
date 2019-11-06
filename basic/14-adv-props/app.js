import { child } from './child.js'
import './base-checkbox.js'

var app = new Vue({
  el: '#root',
  data: {
    lovingVue: true
  },
  components: {
    child
  }
})