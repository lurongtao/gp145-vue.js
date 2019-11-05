var app = new Vue({
  el: '#root',
  data: {
    textValue: 'test',
    isChecked: true,
    hobbits: ['睡觉'],
    gender: 'female',
    selectedCity: ['北京'],
    toggle: true
  },

  mounted() {
    setTimeout(() => {
      this.isChecked = false
    }, 5000)
  },
})