import numKeyboardInput from './numKeyboardInput'
import icon from 'libs/icon'
import touch from 'vue-directive-touch'
import VueSVGIcon from 'vue-svgicon'
import './keyboard.scss'

export default {
  install (Vue) {
    Vue.use(VueSVGIcon)
    Vue.use(touch)
    Vue.component('icon', icon)
    Vue.component('numkeyboard', Vue.extend(numKeyboardInput))
  }
}
