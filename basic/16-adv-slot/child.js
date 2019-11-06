export const child = {
  props: ['todo'],
  template: `
    <div>
      <slot :message="message" title="标题"></slot>
      <slot name="slot1" title="标题2"></slot>
      <slot name="slot2" title="标题3"></slot>
      <slot name="slot4"></slot>

      
      <ul>
        <li
          v-for="todo in filteredTodos"
          v-bind:key="todo.id"
        >
          <slot name="todo" v-bind:todo="todo">
            <!-- 后备内容 -->
            {{ todo.text }}
          </slot>
        </li>
      </ul>

    </div>
  `,

  data() {
    return {
      message: 'world'
    }
  },

  methods: {
    handleClick() {
      
    }
  },

  computed: {
    filteredTodos() {
      return this.todo.filter((value) => {
        return value.finished
      })
    }
  },
}