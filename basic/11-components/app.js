const Counter = Vue.component('counter', {
  data() {
    return {
      count: 0
    }
  },

  template: `
    <div>
      <button @click="handleClick">{{count}}</button>
      <slot></slot>
      <slot name="w"></slot>
    </div>
  `,

  methods: {
    handleClick() {
      this.count++
    }
  },
})

var Comp1 = Vue.component('Comp1', {
  template: '<div>component1</div>'
})
var Comp2 = Vue.component('Comp2', {
  template: '<div>component2</div>'
})
var Comp3 = Vue.component('Comp3', {
  template: '<div>component3</div>'
})

const MyTr = Vue.component('MyTr', {
  template: `
    <tr><td>hello</td></tr>
  `
})

var app = new Vue({
  el: '#root',
  data: {
    currentComp: Comp1,
    comps: {
      Comp1,
      Comp2,
      Comp3
    }
  },
  methods: {
    handleClick(comp) {
      this.currentComp = comp
    }
  },
})