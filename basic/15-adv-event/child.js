export const child = {
  props: ['aaa', 'bbb'],

  template: `
    <div>
      <button @click="handleClick">{{aaa}}</button>
      <button @click="handleClick">{{bbb}}</button>
    </div>
  `,

  methods: {
    handleClick() {
      this.$emit('update:aaa', 'aaaaaa')
      this.$emit('update:bbb', 'bbbbbb')
    }
  },
}