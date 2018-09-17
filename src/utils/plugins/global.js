import time from 'jt-time'
import consts from '../consts/index'
import helpers from '../helpers/base'
import bridge from '../bridge'
import auth from '../auth'
import request from '../request'

export default {
  install (Vue) {
    Vue.prototype.$time = time
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
    Vue.prototype.$bridge = bridge
    Vue.prototype.$auth = auth
    Vue.prototype.$request = request

    Vue.filter('time', val => time.getTime(val))
    Vue.filter('date', val => time.getDate(val))
  }
}
