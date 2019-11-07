import Detail from './detail.js'
import MyMixin from './mixin.js'

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

  mounted() {
    console.log('-----root-----')
    console.log('app mouted.')
  },

  components: {
    Detail
  }
})