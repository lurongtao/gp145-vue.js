export default {
  data() {
    return {
      fontSize: '500px'
    }
  },
  props: ['title', 'class', 'title2'],
  template: `
    <div
      :style="{fontSize: fontSize}"
    >mycomponent {{title}}</div>
  `
}