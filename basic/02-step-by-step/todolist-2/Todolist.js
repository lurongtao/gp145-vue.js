let Todolist = {
  props: ['keywords'],
  template: `
    <section>
      <h2 onclick="save()">正在进行 <span id="todocount"></span></h2>
      <ol id="todolist" class="demo-box">
        <li draggable="true" v-for="task, index in tasks" v-if="!task.isFinished">
          <input v-on:click="handleTodoInput(index)" type="checkbox">
          <p id="p-4">{{task.name}}</p>
          <a v-on:click="handleDelete(index)">-</a>
        </li>
      </ol>
      <h2>已经完成 <span id="donecount"></span></h2>
      <ul id="donelist">
        <li draggable="true" v-for="task, index in tasks" v-if="task.isFinished">
          <input v-on:click="handleDoneInput(index)" type="checkbox" checked>
          <p id="p-4">{{task.name}}</p>
          <a v-on:click="handleDelete(index)">-</a>
        </li>
      </ul>
    </section>
  `,

  data() {
    return {
      tasks: [
        {
          name: 'task 0',
          isFinished: true
        }
      ]
    }
  },

  methods: {
    handleTodoInput(index) {
      this.tasks[index].isFinished = true
    },

    handleDoneInput(index) {
      this.tasks[index].isFinished = false
    },

    handleDelete(index) {
      this.tasks.splice(index, 1)
    }
  },

  watch: {
    keywords(newValue) {
      this.tasks.push({
        name: newValue,
        isFinished: false
      })
    }
  } 
}

export default Todolist