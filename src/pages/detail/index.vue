<template>
  <div class="p-detail">
    <image
      class="pb-banner"
      :src="consts.CDN_URL + '/demos/pages/detail/banner.png'" />
    <div class="o-box u-mb-14">
      <div class="pb-title c3 fs34 u-lh-1 u-tac u-fwb">{{ detail.title }}</div>
      <div class="pb-subtitle c5 fs24 u-lh-1 u-tac">{{ detail.subtitle }}</div>
      <div class="pb-body c3 fs28">{{ detail.description }}</div>
      <div class="pb-price c2 fs30 u-lh-1 u-tac u-fwb">¥{{ detail.amount }}</div>
      <div class="pb-buttons c-button--1__wrap o-grid">
        <div class="o-grid__cell">
          <div
            class="c-button c-button--1 is-left"
            @click="handleBuyNow">
            立刻购买
          </div>
        </div>
        <div class="o-grid__cell">
          <div class="c-button c-button--1 is-right">使用好人卡</div>
        </div>
      </div>
    </div>
    <div class="pb-notice o-box">
      <div class="pb-notice__title c fs30 u-lh-1 u-fwb">测试须知</div>
      <text class="pb-notice__body c3 fs28">
        1.点击右上角的分享，分享给好友，获得2位以上好友的砍价成功即可免费测一次；\n
        2.本测试需要花费5分钟左右就可以出结果；\n
        3.付费成功后自动给跳转到答题页，注意保持网络畅通；\n
        4.为保证结果的准确性，测试只能做一次；\n
        5.为保证结果的准确性，测试只能做一次；
      </text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        detail: {}
      }
    },
    methods: {
      async getDetail () {
        const { id } = this.$root.$mp.query
        const detailRes = await this.$bridge.request({ url: `project/detail/${id}` })

        this.detail = detailRes.data.data[0]
      },
      async handleBuyNow () {
        const goBuyRes = await this.$bridge.request({
          url: 'paycenter/gobuy',
          data: { projectid: 1 }
        })

        if (goBuyRes.data.code === 0) {
          const { timeStamp, nonceStr, package: pkg, paySign } = goBuyRes.data.data[0].order

          try {
            await this.$bridge.requestPayment({
              timeStamp,
              nonceStr,
              package: pkg,
              signType: 'MD5',
              paySign: paySign
            })
          } catch (e) {
            console.log('requestPayment: ', e)
          }
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
