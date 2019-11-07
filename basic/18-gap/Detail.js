import DetailChild from './DetailChild.js'
import { MyComponent } from './my-component.js'

export const Detail = {
  data() {
    return {
      title: '标题一'
    }
  },

  template: `
    <div v-once>
      detail

      {{title}}

      <DetailChild ref="child"></DetailChild>

      <MyComponent></MyComponent>
    </div>
  `,

  components: {
    DetailChild,
    MyComponent
  },

  methods: {
    handleNavClick(type) {
      console.log(type)
    }
  },

  myFunction: function() {
    console.log(0)
  },

  mounted() {
    // setTimeout(() => {
    //   this.$refs['child'].title = 'world'
    // }, 0)
    
    // this.handleNavClick('list')
    // this.$options.methods.handleNavClick('list')

    setTimeout(() => {
      this.title = '标题二'
    }, 3000)
  },
}