export default {
  data() {
    return {
      title: 'hello'
    }
  },

  render(h) {
    return h(
      'div',
      {
        // 普通的 HTML 特性
        attrs: {
          id: 'foo'
        },
        props: {
          myProp: 'bar'
        },
        domProps: {
          innerHTML: 'baz'
        },
        on: {
          click: () => {
            alert(0)
          }
        },
        'class': {
          foo: true,
          bar: false
        },
        style: {
          color: 'red',
          fontSize: '14px'
        },
      },
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