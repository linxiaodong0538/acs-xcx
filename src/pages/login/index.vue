<template>
  <div class="p-tab-bar-my">
    <button open-type="getUserInfo" @bindgetuserinfo="getUserInfo" style="margin-top:300rpx">登陆 </button>
  </div>
</template>

<script>
export default {
  created () {
    // this.getUserInfo()
  },
  data () {
    return {}
  },
  methods: {
    getUserInfo (e) {
      console.log(e)
      wx.login({
        success: res => {
          console.log(1)
          wx.getUserInfo({
            success: res => {
              console.log(2)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
