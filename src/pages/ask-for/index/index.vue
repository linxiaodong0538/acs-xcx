<template>
  <div class="p-ask-for-index">
    <div class="pb-avatar c-avatar c-avatar--2">
      <image
        class="c-avatar__image"
        :src="consts.CDN_URL + '/demos/pages/tab-bar/my/avatar.jpg'" />
      <div class="c-avatar__text c3 fs34">刘敏大人</div>
    </div>
    <div class="pb-card">
      <div class="pb-card__body c3 fs34">我想要参与“为什么你总是闷闷不乐？”的测试，需要2张好人卡，请你送我一张呗～</div>
      <ul class="pb-options">
        <li class="pb-options__item">两岸猿声啼不住，送你一张好人卡</li>
        <li class="pb-options__item">相见时难别亦难，送你一张好人卡</li>
        <li class="pb-options__item">葡萄美酒夜光杯，送你一张好人卡</li>
        <li class="pb-options__item">对不起我已经有喜欢的人了，给你一张好人卡</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" src="./styles.scss"></style>
