<template>
  <div class="p-login">
    <div class="pb-logo">
      <div class="c-icon c-icon--logo"></div>
      <div class="pb-logo__title fs36">牛测试</div>
    </div>
    <p class="pb-tip c5 fs27">
      您暂未获取微信授权，将无法正常使用小程序的功能。如需要正常使用，请点击“授权登录”按钮，打开头像，昵称等信息的授权。
    </p>
    <button
      class="c-button c-button--2"
      open-type="getUserInfo"
      @getuserinfo="handleGetUserInfo">
      登录并授权
    </button>
  </div>
</template>

<script>
  import { utils } from 'mp-client'

  export default {
    methods: {
      async handleGetUserInfo (e) {
        const { userInfo, iv, encryptedData } = e.mp.detail
        const loginRes = await this.$bridge.login()
        const getSettingRes = await this.$bridge.getSetting()

        if (!getSettingRes.authSetting['scope.userInfo']) {
          this.$bridge.showToast({ title: '您需要授权才能进行下一步的操作，请点击登录并授权' })
        } else {
          const siginRes = await this.$bridge.request({
            requiresAuth: false,
            method: 'POST',
            url: 'signin/weixin',
            dataType: 'json',
            data: {
              code: loginRes.code,
              user: userInfo,
              iv,
              encryptedData
            }
          })

          if (siginRes.data.code === 0) {
            this.$auth.login({
              user: userInfo,
              token: siginRes.data.data[0].token
            })
          }

          const url = '/' + utils.url.decode(this.$mp.query.from)

          try {
            await this.$bridge.navigateTo({ url })
          } catch (e) {
            await this.$bridge.switchTab({ url })
          }
        }
      }
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
