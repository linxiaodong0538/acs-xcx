import bridge from '../bridge'
import helpers from '../helpers/base'
import consts from '../consts/index'
import time from 'jt-time'
import auth from '../auth'

export default {
  install (Vue) {
    Vue.prototype.$bridge = bridge
    Vue.prototype.$helpers = helpers
    Vue.prototype.$consts = consts
    Vue.prototype.$time = time
    Vue.prototype.$auth = auth

    Vue.filter('time', val => time.getTime(val))
    Vue.filter('date', val => time.getDate(val))
  }
}
