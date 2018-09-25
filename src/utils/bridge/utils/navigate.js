import wxb from 'wx-bridge'
import consts from '../../consts/index'
import auth from '../../auth'

export default fn => {
  return ({ url, requiresLogin = false }) => {
    return requiresLogin && !auth.loggedIn()
      ? wxb[fn]({ url: consts.LOGIN_PAGE })
      : wxb[fn]({ url })
  }
}
