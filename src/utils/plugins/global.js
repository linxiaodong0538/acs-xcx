import time from 'jt-time'
import consts from '../consts/index'
import helpers from '../helpers/base'
import auth from '../auth'
import bridge from '../bridge'

export default {
  install (Vue) {
    Vue.prototype.$helpers = helpers
    Vue.prototype.$bridge = bridge
    Vue.prototype.$consts = consts
    Vue.prototype.$time = time
    Vue.prototype.$auth = auth
    Vue.filter('time', val => time.getTime(val))
    Vue.filter('date', val => time.getDate(val))
  }
}
