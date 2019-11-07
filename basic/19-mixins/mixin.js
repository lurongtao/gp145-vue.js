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
}

export default MyMixin