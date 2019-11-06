export const child = {
  // props: ['title', 'aaa', 'bbb', {
  //   type: {
  //     type: [Number],
  //     validator(value) {
  //       return value > 100
  //     }
  //   }
  // }],

  props: {
    title: Object,
    aaa: Number,
    bbb: Number,
    type: {
      type: [Number],
      validator(value) {
        return value > 100
      }
    }
  },

  data() {
    return {
      title2: this.title
    }
  },

  template: `
    <div class="aa" window="www">{{title2.x}} {{aaa}} / {{type}}</div>
  `,

  inheritAttrs: false,

  mounted() {
    
  }
}