import Vue from 'vue'
import App from './App.vue'

import numkeyboard from './vue-numkeyboard'

Vue.use(numkeyboard)

const app = new Vue({
  el: '#app',
  render: h => h(App)
})

console.log(app)
