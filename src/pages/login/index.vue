<template>
  <div class="p-login">
    <p class="pb-title u-c3 u-fs34 u-lh-1">申请获取以下权限</p>
    <p class="pb-desc u-c5 u-fs30 u-lh-1">获得您的公开信息（昵称、头像等）</p>
    <button
      class="c-button c-button--1"
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
