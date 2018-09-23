import wxb from 'wx-bridge'
import request from './request'
import navigateTo from './navigateTo'
import redirectTo from './redirectTo'
import switchTab from './switchTab'
import reLaunch from './reLaunch'

export default {
  ...wxb,
  request,
  navigateTo,
  redirectTo,
  switchTab,
  reLaunch
}
