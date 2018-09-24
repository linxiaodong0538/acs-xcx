<template>
  <div class="p-result">
    <div class="c-banner">
      <image
        class="c-banner__image"
        :src="consts.CDN_URL + '/demos/pages/detail/banner.png'" />
      <div class="c-banner__overlay"></div>
      <div class="c-banner__text u-c1 u-fs36">测测面对爱情你有多忠诚？</div>
    </div>
    <div class="o-box">
      <div class="pb-avatar">
        <div class="c-avatar c-avatar--1">
          <image
            class="c-avatar__image"
            :src="consts.CDN_URL + '/demos/pages/tab-bar/my/avatar.jpg'" />
          <div class="c-avatar__text u-c7 u-fs28">刘敏大人</div>
        </div>
      </div>
      <div class="pb-title u-c3 u-fs28">测试结果：爱情忠诚指数</div>
      <div class="pb-body u-c7 u-fs28">
        你是个对爱情忠诚指数极高的人，而你爱上的人和你恋爱的方式也很另类。要是说你恋爱的一开始，其实跟别人差不多，也是突然地一种感觉滋生。可你的迟疑通常无法让这种感觉平安的开花结果，你总有办法把你的恋情毁灭得让旁人苦笑不得。其实，你恋情的主动权往往要看对方。当对方是个成熟的人，接受百变的你，终于等到你的勇气积攒到可以往前的时候，世界上最甜蜜的事情就会发生。
      </div>
    </div>

    <div class="o-box o-box--ghost">
      <div class="pb-buttons c-button--1__wrap o-grid">
        <div class="o-grid__cell">
          <div class="c-button c-button--1 is-left">保存结果图</div>
        </div>
        <div class="o-grid__cell">
          <div class="c-button c-button--1 is-right">分享给好友</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    onLoad () {
      console.log(this.$consts)
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
