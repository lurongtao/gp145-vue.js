import MyMixin from './mixin.js'

export default {
  mixins: [MyMixin],

  mounted() {
    console.log('----detail----')
    console.log('detail mounted.')
  },

  template: `
    <div>{{title}} - {{message}}</div>
  `
}