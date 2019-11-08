var app = new Vue({
  el: '#root',

  data: {
    title: 'hello',
    gender: 0,
    url: 'www.domain.com/axb'
  },

  computed: {
    // filterGender() {
    //   return this.gender === 0 ? '男' : '女'
    // }
  },

  filters: {
    filterGender(value, name) {
      return (value === 0 ? '男' : '女') + name
    },

    filterGenderName(value, other) {
      return value + other
    },

    filterUrl(value) {
      value = value.replace('axb', '3x5')
      return 'http://' + value
    }
  }
})