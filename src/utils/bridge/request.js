import consts from '../consts/index'
import wxb from 'wx-bridge'
import auth from '../auth'

export default (
  {
    method = 'GET',
    baseURL = consts.BASE_URL,
    url = '',
    headers = {},
    requiresAuth = true,
    ...otherOptions
  }
) => {
  return new Promise((resolve, reject) => {
    wxb.request({
      header: requiresAuth
        ? {
          ...headers,
          Authorization: auth.get()['token']
        }
        : headers,
      method,
      url: `${baseURL}/${url}`,
      success: resolve,
      fail: reject,
      ...otherOptions
    })
  })
}
