<template>
  <div class="p-tab-bar-index">
    <Swiper :items="[
    { image: 'http://localhost:88/demos/pages/tab-bar/index/swiper/1.jpg' },
    { image: 'http://localhost:88/demos/pages/tab-bar/index/swiper/2.jpg' }
    ]" />
    <div class="c-panel">
      <div class="c-panel__head">
        <div class="c-panel__title u-c3 u-fs36 u-fwb">最热测试</div>
      </div>
      <div class="c-panel__body">
        <scroll-view
          class="c-list1-scroll"
          scroll-x>
          <div class="c-list1" :style="{ width: (225 + 10) * 4 + 20 + 'rpx' }">
            <div
              v-for="(item, index) in [0, 1, 2, 3]"
              :key="index"
              class="c-list1__item">
              <image
                class="c-list1__image"
                src="http://localhost:88/demos/pages/tab-bar/index/list1/1.jpg" />
              <div class="c-list1__title u-c3 u-fs28 u-lh-fs34 u-fwb">{{ item }} - 这里是标题</div>
              <div class="c-list1__price u-c2 u-fs26 u-lh-1 u-fwb">¥11</div>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
    <div class="c-panel">
      <div class="c-panel__head m-underline">
        <div class="c-panel__title u-c3 u-fs36 u-fwb">朋友都在测</div>
        <div class="c-panel__more u-c5 u-fs26 u-vc">更多</div>
      </div>
      <div class="c-panel__body c-list">
        <div
          v-for="(item, index) in [0, 1, 2, 3]"
          :key="index"
          class="c-list__item">
          <div class="c-list__title u-c3 u-fs30 u-lh-1 u-fwb u-to">{{ item }} - 是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发</div>
          <div class="c-list__desc u-c5 u-fs22 u-lh-1 u-to">胜多负少的</div>
          <div class="c-list__price u-c2 u-fs26 u-lh-1 u-fwb">¥11</div>
          <div class="c-list__addon u-c5 u-fs22 u-lh-1">11人已测</div>
          <image
            class="c-list__image u-vc"
            src="http://localhost:88/demos/pages/tab-bar/index/list/1.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/swiper'

  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      Swiper
    },
    async created () {
      this.items = await this.$bridge.request({
        url: 'index'
      })

      // console.log(this.items)
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
