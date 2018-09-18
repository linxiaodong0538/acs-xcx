<template>
  <div class="p-login">
    <div class="pb-login-container">
      <div class="pb-login-wrapper">
          <div class="pb-login-wrapper__logo">
            <img src="../../../others/爱测试切图/wx.png" alt="">
          </div>
      </div>
      <div class="pb-accredit-wrapper">
        <h2 class="u-fs34">申请获取以下权限</h2>
        <p class="u-fs30 u-c5">获得您的公开信息(昵称,头像等)</p>
        <button class="u-bg-c2 u-c6" open-type="getUserInfo" bindgetuserinfo="onGetUserInfo">授权登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created () {
    await this.onGetUserInfo()
  },
  data () {
    return {}
  },
  methods: {
    onGetUserInfo (e) {
      console.log(e)
      wx.login({
        success: res => {
          const code = res.code
          // 查看是否授权
          wx.getSetting({
            success: res => {
              if (res.authSetting['scope.userInfo'] === true) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success: res => {
                    let userInfo = res.userInfo
                    // console.log('ok', userInfo)
                    let userParam = {
                      code: code,
                      user: res.userInfo,
                      iv: res.iv,
                      encryptedData: res.encryptedData
                    }
                    this.$request({
                      requiresAuth: false,
                      method: 'POST',
                      url: 'signin/weixin',
                      dataType: 'json',
                      data: userParam
                    })
                      .then(res => {
                        if (res.data.code === 0) {
                          let token = res.data.data[0].token
                          this.$auth.login({ user: userInfo, token: token })
                        }
                      }).catch(err => {
                        console.log(err)
                      })
                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (this.userInfoReadyCallback) {
                      this.userInfoReadyCallback(res)
                    }
                    wx.switchTab({
                      url: '/pages/tab-bar/index/main'
                    })
                  }
                })
              }
            }
          })
        }
      })
    }
  },
  onGetUserInfo (e) {
    if (e.detail.rawData) {
      this.onGetUserInfo()
    } else {
      wx.showToast({
        title: '您需要授权才能进行下一步的操作,请点击登陆授权',
        icon: 'none',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
