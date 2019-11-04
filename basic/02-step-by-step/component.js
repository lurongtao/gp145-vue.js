Vue.component('todo-input', {
  template: `
    <div>
      <input type="text" v-on:keyup.enter="handleKeyup" v-model="inputValue"/>
    </div>
  `,

  data() {
    return {
      inputValue: ''
    }
  },

  methods: {
    handleKeyup() {
      this.$emit('keyword', this.inputValue)
      this.inputValue = ''
    }
  }
})

Vue.component('todo-list', {
  props: ['keyword'],
  
  template: `
    <ul>
      <todo-item 
        v-for="(item,index) in list" 
        v-bind:li="item"
        v-bind:key="item + index"
        v-on:message="handleMessage"
      ></todo-item>
    </ul>
  `,

  data() {
    return {
      list: ['task 1', 'task 2']
    }
  },

  watch: {
    keyword(newValue) {
      this.list.push(newValue)
    }
  },

  methods: {
    handleMessage() {
      // console.log('message')
    }
  }
})

Vue.component('todo-item', {
  props: ['li'],
  template: `
    <li>{{li}}</li>
  `,
  mounted() {
    this.$emit('message')
  }
})

var app = new Vue({
  el: '#root',
  data: {
    keyword: 'bbb'
  },
  methods: {
    hanldeKeyword(keyword) {
      this.keyword = keyword
    }
  }
})