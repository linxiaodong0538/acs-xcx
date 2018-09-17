import bridge from './bridge'

const USER = 'user'
const TOKEN = 'token'

export default {
  /**
   * 获取 auth，返回：用户信息和 token
   * @return {Object}
   */
  get () {
    return {
      [USER]: bridge.getStorageSync(USER),
      [TOKEN]: bridge.getStorageSync(TOKEN)
    }
  },

  /**
   * 登录
   * @param {string} user 登录用户
   * @param {string} token 登录 token
   */
  login ({ user, token }) {
    bridge.setStorageSync(USER, user)
    bridge.setStorageSync(TOKEN, `Bearer ${token}`)
  },

  /**
   * 登出
   */
  logout () {
    bridge.removeStorageSync(USER)
    bridge.removeStorageSync(TOKEN)
  },

  /**
   * 是否已登录
   * @return {boolean}
   */
  loggedIn () {
    return !!bridge.getStorageSync(USER) && !!bridge.getStorageSync(TOKEN)
  }
}
