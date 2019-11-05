Vue.component('MyComponent', {
  template: `
    <div>Comp1</div>
  `
})

const ChildComponent = {
  template: `
    <div>Child Comp1</div>
  `
}

var app = new Vue({
  template: `
    <div>
      <h1>title</h1>
      <MyComponent></MyComponent>
    </div>
  `,
  el: '#root',
  data: {},
  components: {
    ChildComponent
  }
})