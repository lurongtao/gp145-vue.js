let app = new Vue({
  el: '#root',
  data: {
    title: 'message',
    body: "body text",
    list: ['a', 'b', 'c']
  },
  methods: {
    handleClick() {
      this.body = 'body content'
    }
  }
})
// app.body = "body text"

// console.log(app)