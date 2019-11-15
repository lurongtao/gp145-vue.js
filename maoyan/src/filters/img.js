import Vue from 'vue'

Vue.filter('wh', (value, args) => {
  return value.replace('w.h', args)
})