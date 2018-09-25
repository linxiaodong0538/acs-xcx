import wxb from 'wx-bridge'
import consts from '../consts/index'
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
  return wxb.request({
    header: requiresAuth
      ? {
        ...headers,
        Authorization: auth.get()['token']
      }
      : headers,
    method,
    url: `${baseURL}/${url}`,
    ...otherOptions
  })
}
