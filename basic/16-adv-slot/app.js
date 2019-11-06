import { TodoList } from './TodoList.js'
var app = new Vue({
  el: '#root',
  data: {
    message: 'hello',
    slotname: 'slot4',
    todo: [
      {
        id: "1",
        text: 'task1',
        finished: true
      },
      {
        id: "2",
        text: 'task2',
        finished: true
      },
      {
        id: "3",
        text: 'task3',
        finished: false
      }
    ]
  },
  components: {
    TodoList
  },
  
})