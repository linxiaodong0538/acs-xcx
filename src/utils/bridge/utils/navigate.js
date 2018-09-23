import consts from '../../consts/index'
import auth from '../../auth'

export default fn => {
  return (
    {
      url,
      requiresLogin = true
    }
  ) => {
    return new Promise((resolve, reject) => {
      if (requiresLogin && !auth.loggedIn()) {
        wx[fn]({ url: consts.LOGIN_PAGE })
      } else {
        wx[fn]({
          url,
          success: resolve,
          fail: reject
        })
      }
    })
  }
}
