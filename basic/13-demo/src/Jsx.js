export const Jsx = {
  data() {
    return {
      todolist: [
        'a', 'b', 'c'
      ]
    }
  },

  render(h) {
    return (
      <div>
        {
          this.todolist.map((value, index) => {
            return <div>{value}</div>
          })
        }
      </div>
    )
  }
}