<template>
  <div class="p-login">
    <div class="pb-login-container">
      <div class="pb-login-wrapper">
          <div class="pb-login-wrapper__logo">
            <img src="../../../others/images/wx.png" alt="">
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
              console.log(11, res)
              if (res.authSetting['scope.userInfo'] === true) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success: res => {
                    console.log('e', res)
                    let userParam = {
                      code: code,
                      user: res.userInfo,
                      iv: res.iv,
                      encryptedData: res.encryptedData
                    }
                    let data = JSON.stringify(userParam)
                    console.log('1111', data)
                    this.$bridge
                      .request({
                        method: 'POST',
                        url: 'signin/weixin',
                        dataType: 'json',
                        data: data,
                        header: {
                          'Content-Type': 'aapplication/x-www-form-urlencoded'
                        },
                        success: res => {
                        }
                      })
                      .then(v => {
                        console.log(1, v)
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
    console.log(e)
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
