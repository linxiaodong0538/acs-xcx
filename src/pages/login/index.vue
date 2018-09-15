<template>
  <div class="p-tab-bar-my">
    <button open-type="getUserInfo" @bindgetuserinfo="getUserInfo" style="margin-top:300rpx">登陆 </button>
  </div>
</template>

<script>
export default {
  created () {
    this.getUserInfo()
  },
  data () {
    return {}
  },
  methods: {
    getUserInfo (e) {
      wx.login({
        success: res => {
          const code = res.code
          wx.getSetting({
            success: res => {
              console.log(res)
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  success: res => {
                    let param = {
                      code: code,
                      iv: res.iv,
                      encryptedData: res.encryptedData
                    }
                    this.$bridge.request({
                      url: 'b',
                      data: param,
                      header: {
                        'Content-Type': 'application/json'
                      },
                      success: res => {
                        console.log(res)
                      }
                    })
                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (this.userInfoReadyCallback) {
                      this.userInfoReadyCallback(res)
                    }
                  }
                })
              } else {
                console.log(2)
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
