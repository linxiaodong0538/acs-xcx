import time from 'jt-time'
import consts from '../consts/index'
import helpers from '../helpers/base'
import bridge from '../bridge'
import auth from '../auth'
import request from '../request'
import navigation from '../navigation'
import wxb from 'wx-bridge'

export default {
  install (Vue) {
    Vue.prototype.$time = time
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
    Vue.prototype.$bridge = bridge
    Vue.prototype.$wxb = wxb
    Vue.prototype.$auth = auth
    Vue.prototype.$request = request
    Vue.prototype.$navigateTo = navigation('navigateTo')
    Vue.prototype.redirectTo = navigation('redirectTo')
    Vue.prototype.$switchTab = navigation('switchTab')
    Vue.prototype.$reLaunch = navigation('reLaunch')

    Vue.filter('time', val => time.getTime(val))
    Vue.filter('date', val => time.getDate(val))
  }
}
