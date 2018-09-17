import consts from './consts/index'
import bridge from './bridge'
import auth from './auth'

export default (
  {
    method = 'GET',
    url,
    header = {},
    requiresAuth = true,
    ...otherOptions
  }
) => {
  return new Promise((resolve, reject) => {
    bridge.request({
      header: requiresAuth
        ? { Authorization: auth.get()['token'] }
        : {},
      method,
      url: `${consts.BASE_URL}/${url}`,
      success: resolve,
      fail: reject,
      ...otherOptions
    })
  })
}
