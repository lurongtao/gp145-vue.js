import { Comp1 } from './Comp1.js'
import { Comp2 } from './Comp2.js'
import { Comp3 } from './Comp3.js'

const List = {
  template: `
    <div>
      <ul>
        <li @click="handleClick(value)" v-for="value,key in comps">{{key}}</li>
      </ul>
      <component :is="currentComp"></component>
      <div>{{notice}}</div>
    </div>
  `,

  data(){
    return {
      currentComp: Comp1,
      
      comps: {
        Comp1,
        Comp2,
        Comp3
      },
  
      isShow: true,
      notice: 'message...'
    }
  },

  components: {
    Comp1,
    Comp2,
    Comp3
  },

  methods: {
    handleClick(value) {
      this.currentComp = value
    },

    handleNavClick(type) {
      this.isShow = (type === 'comp')
    }
  },

  mounted() {
    console.log('mounted.')
  },

  updated() {
    console.log('updated.')
  },

  activated() {
    this.notice = 'message...'
  },

  deactivated() {
    this.notice = 'warning...'
  },
}

export default List