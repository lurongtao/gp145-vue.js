import global from './global.js'

const DetailChild = {
  name: 'detail-child',
  template: `
    <div>
      <div>detail-child {{title}}</div>
    </div>
  `,

  data() {
    return {
      title: 'hello'
    }
  },

  inject: ['name', 'rating', 'changeName'],

  mounted() {
    // this.changeName('我爱我的祖国')
    // console.log(this.name)

    global.$emit('message', 'hello')
  },
}

export default DetailChild