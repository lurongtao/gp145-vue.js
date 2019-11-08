const MyPlugin = {}

MyPlugin.install = (Vue, options) => {
  Vue.$open = () => {
    window.open('http://www.baidu.com')
  }

  Vue.$gp = "gp145"

  Vue.directive('off', (el, binding) => {
    console.log(binding.value)
  })

  Vue.component('my-component', {
    template: `
      <div>my-component</div>
    `
  })

  Vue.mixin({
    beforeCreate() {
      console.log('beforeCreate')
    }
  })

  Vue.prototype.$getName = (name) => {
    console.log(name)
  }
}

export default MyPlugin