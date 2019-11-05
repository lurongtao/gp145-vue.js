import MyComponent from "./MyComponent.js"

var app = new Vue({
  el: '#root',
  data: {
    list: [
      'aaa',
      'bbb',
      'ccc'
    ],
    courses: {
      name: 'javascript',
      level: 2,
      type: 'frontend'
    }
  },
  computed: {
    list2() {
      return this.list.map((value, index) => {
        return value + index
      })
    }
  },
  components: {
    'my-component': MyComponent
  }
})

window.app = app

// let obj = {
//   _hello: 'hello world' //表示私有变量
// };

// Object.defineProperty(obj, 'hello', {
//   get() {
//     console.log('get');
//     return this._hello;
//   },
//   set:function (value) {
//     console.log('set');
//     this._hello = value;
//   }
// });


// console.log(obj.hello);
// obj.hello = 'goodbye';
// console.log(obj.hello); 


// obj.world = 'bbb'