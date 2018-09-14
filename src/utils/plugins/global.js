import time from 'jt-time'
import consts from '../consts/index'
import helpers from '../helpers/base'
import bridge from '../bridge/index'

export default {
  install (Vue) {
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
    Vue.prototype.$bridge = bridge
    Vue.prototype.$time = time

    Vue.filter('time', val => time.getTime(val))
    Vue.filter('date', val => time.getDate(val))
  }
}
