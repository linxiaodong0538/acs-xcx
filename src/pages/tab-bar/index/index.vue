<template>
  <div class="p-tab-bar-index">
    <Swiper :items="[
    { image: 'http://localhost:88/demos/pages/tab-bar/index/swiper/1.jpg' },
    { image: 'http://localhost:88/demos/pages/tab-bar/index/swiper/2.jpg' }
    ]" />
    <div class="c-panel">
      <div class="c-panel__head">
        <div class="c-panel__title c3 fs36">最热测试</div>
        <div class="c-panel__more c5 fs26 u-vc">更多</div>
      </div>
      <div class="c-panel__body">
        <div class="c-list1">
          <div class="c-list1__item">
            <image
              class="c-list1__image"
              src="http://localhost:88/demos/pages/tab-bar/index/list1/1.jpg" />
            <div class="c-list1__title c3 fs28 lh-fs34">这里是标题</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/swiper'

  export default {
    components: {
      Swiper
    },
    created () {
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
