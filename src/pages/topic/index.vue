<template>
    <div class="p-swiper">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="2500"
      @change="handleChange" class="pb-siwper-wrapper u-bg-c1">
      <swiper-item
        v-for="(item, index) in test"
        :key="index">
          <div class="pb-siwper-wrapper__content">
            <p class="u-tac">{{item.title}}</p>
          </div>
      </swiper-item>
    </swiper>
    <div class="pb-siwper-indicator u-tac">
      <span class="pb-siwper-indicator__top fs40">{{current + 1}}</span>
      <span class="pb-siwper-indicator__bottom fs40 c5">{{ pageNum }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: [{title: '测试1测试1'}, {title: '测试2'}, {title: '测试3'}, {title: '测试4'}],
      current: 0
    }
  },
  computed: {
    pageNum () {
      return this.test.length
    }
  },
  methods: {
    handleChange (e) {
      this.current = e.mp.detail.current
    }
  }
}
</script>

<style lang="scss" src="./styles.scss" scope></style>
