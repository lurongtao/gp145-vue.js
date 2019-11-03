Vue.component('todo-input', {
  template: `
    <div>
      <input 
        type="text"
        v-model="inputValue"
        v-on:keyup.enter="handleKeyup"
      />
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
      v-for="li,i in list"
      v-bind:key="li"
      v-bind:item="li"
      v-bind:i="i"
      v-on:delete="handleDelete"
    ></todo-item>
  </ul>
  `,

  data() {
    return {
      list: ['task 0']
    }
  },

  methods: {
    handleDelete(i) {
      this.list.splice(i, 1)
    }
  },

  watch: {
    keyword(newValue) {
      this.list.push(newValue)
    }
  }
})

Vue.component('todo-item', {
  props: ['item', 'i'],
  template: `
    <li>{{item}} <button v-on:click="handleClick">x</button></li> 
  `,
  methods: {
    handleClick() {
      this.$emit('delete', this.i)
    }
  }
})

var app = new Vue({
  el: '#root',
  data: {
    keyword: ''
  },
  methods: {
    handleKeyword(keyword) {
      this.keyword = keyword
    }
  }
})