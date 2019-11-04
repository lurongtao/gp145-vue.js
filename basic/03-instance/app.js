let app = new Vue({
  // template: `
  //   <div id="title">{{title}}</div>
  // `,

  data: {
    title: 'title 1',
    title2: '',
    message: 'hello'
  },

  methods: {
    handleClick() {

    }
  },

  beforeCreate() {
    // console.log('beforeCreate.')
    // console.log(this)
    // console.log(this.title)
    // console.log(document.querySelector('#title'))
  },

  created() {
    // console.log('created.')
    // console.log(this)
    // console.log(this.title)
    // console.log(document.querySelector('#title'))
    this.title = 'title 2'
    // setTimeout(() => {
    //   this.title = 'title 2'
    // }, 1000)
  },

  beforeMount() {
    // console.log(this)
    // console.log(this.title)
    // console.log(document.querySelector('#title'))
    this.title = 'title 3'
  },

  mounted() {
    // console.log(this)
    // console.log(this.title)
    // console.log(document.querySelector('#title'))
    // setTimeout(() => {
    //   this.title = 'title 4'
    // }, 1000)
    this.title = 'title 4'
    setTimeout(() => {
      this.title = 'title 4'
    }, 0)
  },

  render(h) {
    console.log('render')
    return h(
      'div',
      {
        name: 'gp145'
      },
      this.title
    )
  },

  beforeUpdate() {
    console.log('beforeUpdate')
  },

  updated() {
    console.log('updated')
  },

  beforeDestroy() {
    console.log('beforeDestroy')
  },

  destroyed() {
    console.log('destroyed')
  },
})

app.$mount('#root')

setTimeout(() => {
  app.$destroy()
}, 3000)

// let app2 = new Vue({
//   el: '#root2',
//   data: {
//     title: 'title n'
//   }
// })

// app2.title3 = 'title 3'

// app2.$watch('title', (newValue) => {
//   console.log(newValue)
// })