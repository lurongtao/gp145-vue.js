var app = new Vue({
  el: '#root',

  data: {
    computer: 'Mac Pro',
    fruits: [
      '',
      '🍌',
      '🍓'
    ],
    products: [],
    inputValue: 'abc'
  },

  mounted() {
    fetch('https://api.myjson.com/bins/1ahip8')
      .then(response => response.json())
      .then((result) => {
        this.products = result
      })
  },

  computed: {
    sum() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  }
})
