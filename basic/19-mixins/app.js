import Detail from './detail.js'
import MyMixin from './mixin.js'

import './global-mixin.js'

Vue.config.productionTip = false

var app = new Vue({
  mixins: [MyMixin],

  el: '#root',

  data: {
    title: 'hello'
  },

  computed: {
    newTitle() {
      return this.title + 'world'
    }
  },

  methods: {
    handleClick() {
      console.log('app click')
    }
  },

  mounted() {
    console.log('-----root-----')
    console.log('app mouted.')

    this.handleClick()

    console.log(this.$options.myvar)
  },

  watch: {
    title(newTitle) {
      console.log(newTitle)
    }
  },

  components: {
    Detail
  },

  myvar: 'gp'
})

Vue.config.optionMergeStrategies.myvar = function (toVal, fromVal) {
  return fromVal
}

window.app = app