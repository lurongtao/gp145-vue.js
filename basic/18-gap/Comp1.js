import global from './global.js'

export const Comp1 = {
  template: `
    <div>comp1</div>
  `,

  mounted() {
    setTimeout(() => {
      // console.log(this.$root)s
    }, 0)

    global.$on('message', (value) => {
      console.log(value)
    })
  },
}