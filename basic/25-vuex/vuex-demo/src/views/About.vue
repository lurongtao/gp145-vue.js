<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{count}} / {{addCount}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    addCount() {
      return this.$store.getters.addCount(5)
    },
    ...mapState({
      count: state => state.count
    })
  },
}
</script>
