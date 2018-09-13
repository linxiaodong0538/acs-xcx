export default options => {
  return new Promise((resolve, reject) => {
    /* global wx */
    wx.request({ ...options, success: resolve, fail: reject })
  })
}
