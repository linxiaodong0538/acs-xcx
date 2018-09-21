<template>
  <div class="p-detail">
    <image class="pb-banner" src="http://localhost:88/demos/pages/detail/banner.png" />
    <div class="o-box u-mb-14">
      <div class="pb-title u-c3 u-fs34 u-lh-1 u-tac u-fwb">{{detailData.title}}</div>
      <div class="pb-subtitle u-c5 u-fs24 u-lh-1 u-tac">{{detailData.subtitle}}</div>
      <div class="pb-body u-c3 u-fs28">{{detailData.description}}</div>
      <div class="pb-price u-c2 u-fs30 u-lh-1 u-tac u-fwb">¥{{detailData.amount}}</div>
      <div class="pb-buttons o-button1-group o-grid">
        <div class="o-grid__cell">
          <div class="c-button1 is-left" @click="we_pay">立刻购买</div>
        </div>
        <div class="o-grid__cell">
          <div class="c-button1 is-right">使用好人卡</div>
        </div>
      </div>
    </div>
    <div class="pb-notice o-box">
      <div class="pb-notice__title u-c u-fs30 u-lh-1 u-fwb">测试须知</div>
      <text class="pb-notice__body u-c3 u-fs28">
        1.点击右上角的分享，分享给好友，获得2位以上好友的砍价成功即可免费测一次；\n 2.本测试需要花费5分钟左右就可以出结果；\n 3.付费成功后自动给跳转到答题页，注意保持网络畅通；\n 4.为保证结果的准确性，测试只能做一次；\n 5.为保证结果的准确性，测试只能做一次；
      </text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailData: {}
    }
  },
  methods: {
    async getDetail () {
      let id = Number(this.$root.$mp.query.id)
      let result = await this.$request({
        requiresAuth: true,
        url: 'project/detail/' + id + ''
      })
      this.detailData = result.data.data[0]
    },
    async we_pay () {
      let token = this.$auth.get()['token']
      let secretData = await this.$request({
        url: 'paycenter/gobuy?projectid=1',
        data: token
      })
      if (secretData.data.code === 0) {
        let res = secretData.data.data[0].order
        console.log(11111, res)
        this.$bridge.requestPayment({
          timeStamp: res.timeStamp,
          nonceStr: res.nonceStr,
          package: res.package,
          signType: 'MD5',
          paySign: res.paySign,
          success: res => {
            console.log(1)
          },
          fail: res => {
            console.log('支付失败')
          }
        })
      } else {
        console.log('数据错误')
      }
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
