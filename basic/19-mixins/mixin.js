const MyMixin = {
  data() {
    return {
      title: 'world',
      message: 'hi'
    }
  },

  mounted() {
    console.log('mixin mounted.')
  },

  computed: {
    newTitle() {
      return this.title + 'china.'
    }
  },

  watch: {
    title(newTitle) {
      console.log(newTitle)
    }
  },

  methods: {
    handleClick() {
      console.log('mixin click.')
    }
  },

  myvar: 'gp145'
}

export default MyMixin