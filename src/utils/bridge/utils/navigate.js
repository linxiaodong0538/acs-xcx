import consts from '../../consts/index'
import auth from '../../auth'

export default fn => {
  return (
    {
      url,
      requiresLogin = false
    }
  ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const navigateRes = requiresLogin && !auth.loggedIn()
          ? await wx[fn]({ url: consts.LOGIN_PAGE })
          : await wx[fn]({ url })
        resolve(navigateRes)
      } catch (e) {
        reject(e)
      }
    })
  }
}
