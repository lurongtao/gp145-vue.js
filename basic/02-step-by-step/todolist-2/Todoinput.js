// Vue.component('todo-input', {
//   template: `
//     <header>
//       <section>
//         <form action="javascript:postaction()" id="form">
//           <label for="title">ToDoList</label>
//           <input type="text" id="title" name="title" placeholder="添加ToDo" required="required" autocomplete="off" />
//         </form>
//       </section>
//     </header>
//   `
// })

let Todoinput = {
  template: `
    <header>
      <section>
        <label for="title">ToDoList</label>
        <input 
          type="text" 
          id="title" 
          name="title"
          placeholder="添加ToDo" 
          required="required" 
          autocomplete="off"
          v-model="keyword"
          v-on:keyup.enter="handleKeyup"
        />
      </section>
    </header>
  `,

  data() {
    return {
      keyword: ''
    }
  },

  methods: {
    handleKeyup() {
      this.$emit('input-keywords', this.keyword)
      this.keyword = ''
    }
  },
}

export default Todoinput