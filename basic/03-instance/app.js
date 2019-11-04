let app = new Vue({
  el: '#root',
  data: {
    title: 'title 1',
    title2: '',
    message: 'hello'
  },

  methods: {
    handleClick() {

    }
  },

  created() {
    // console.log('created.')

  },

  beforeCreate() {
    // console.log('beforeCreate.')
    console.log(this)
    console.log(this.title)
    console.log(document.querySelector('#root').innerHTML)
  }

})

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