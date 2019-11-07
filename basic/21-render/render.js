export default {
  data() {
    return {
      title: 'hello'
    }
  },

  render(h) {
    return h(
      'div',
      {id: 2},
      [
        h(
          'a',
          {},
          'https://www.baidu.com'
        )
      ]
    )
  }
}