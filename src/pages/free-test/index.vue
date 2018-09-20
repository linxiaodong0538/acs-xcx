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
  async created () {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" src="./styles.scss"></style>
