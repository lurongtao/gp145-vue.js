let app = new Vue({
  el: '#root',
  data: {
    isShow: false,
    list: [
      'a', 'b', 'c'
    ],
    loginType: 'username'
  },
  methods: {
    handleClick() {
      this.loginType = 'password'
    }
  },
})