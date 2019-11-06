export const TodoList = {
  props: ['todo'],

  template: `
    <div>
      <ul
        v-for="todo in mapTodo"
        :key="todo.id"
      >
        <li>
          <slot :todo="todo">
            {{todo.text}}
          </slot>
        </li>
      </ul>
    </div>
  `,

  computed: {
    mapTodo() {
      return this.todo.map((value, index) => {
        return {
          id: value.id,
          text: value.text + '---',
          finished: value.finished
        }
      })
    }
  },
}