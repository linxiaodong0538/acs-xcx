import consts from '../consts/index'

export default options => {
  options.url = `${consts.BASE_URL}/${options.url}`

  return new Promise((resolve, reject) => {
    /* global wx */
    wx.request({ ...options, success: resolve, fail: reject })
  })
}
