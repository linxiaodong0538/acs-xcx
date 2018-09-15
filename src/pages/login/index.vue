<template>
  <div class="p-tab-bar-my">
    <button open-type="getUserInfo" @bindgetuserinfo="getUserInfo" style="margin-top:300rpx">登陆 </button>
    <button @click="aa">1</button>
  </div>
</template>

<script>
export default {
  async created () {
    await this.getUserInfo()
  },
  data () {
    return {}
  },
  methods: {
    getUserInfo (e) {
      wx.login({
        success: res => {
          const code = res.code
          // 查看是否授权
          wx.getSetting({
            success: res => {
              console.log(res)
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
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
                      }
                    }).then(v => {
                      console.log(1, v)
                    })
                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (this.userInfoReadyCallback) {
                      this.userInfoReadyCallback(res)
                    }
                    wx.navigateTo({
                      url: '../tab-bar/categories/main.js'
                    })
                  }
                })
              } else {
                console.log(2)
              }
            },
            fail: res => {
              console.log('err')
              wx.showToast({
                title: '您需要授权才能进行下一步的操作,请点击登陆授权',
                icon: 'none',
                duration: 2000
              })
            }
          })
        }
      })
    },
    aa: res => {
      wx.switchTab({
        url: '../../pages/tab-bar/index/main.js',
        success: e => {
          console.log(e)
        },
        fail: err => {
          console.log(err)
        }
      }
      )
    }
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
