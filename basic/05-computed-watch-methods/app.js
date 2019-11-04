var app = new Vue({
  el: '#root',

  data: {
    gender: 1,
    title: 'title 0',
    gend: ''
  },

  // 计算属性
  // 基于依赖缓存
  computed: {
    g() {
      console.log('computed.')
      setTimeout(() => {
        return this.gender === 0 ? '男' : '女'
      }, 0)
    },
    title2: {
      get() {
        console.log('get')
        return this.title
      },

      set(value) {
        console.log('set')
        this.title = value
      }
    }
  },

  // 方法
  methods: {
    gen() {
      console.log('methods.')
      return this.gender === 0 ? '男' : '女'
    }
  },

  // 监听器
  // 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
  watch: {
    gender(newValue) {
      this.gend = newValue === 0 ? '男' : '女'
    }
  }
})