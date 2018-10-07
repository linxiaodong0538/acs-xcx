<template>
  <div class="p-tab-bar-index">
    <div class="pb-swiper-wrap">
      <CSwiper :items="detail.banner" />
    </div>
    <div class="c-panel">
      <div class="c-panel__head">
        <div class="c-panel__title c3 fs36 u-fwb">最热测试</div>
      </div>
      <div class="c-panel__body">
        <scroll-view
          class="c-list-1__wrap"
          scroll-x>
          <div
            class="c-list-1"
            :style="{ width: (225 + 10) * detail.hots.length + 20 + 'rpx' }">
            <div
              v-for="(item, index) in detail.hots"
              :key="index"
              class="c-list-1__item"
              @click="navigateTo('/pages/detail/main?id=' + item.id)">
              <image
                class="c-list-1__image"
                :src="item.thumb" />
              <div class="c-list-1__title c3 fs28 u-lh-fs34 u-fwb">{{ item.title }}</div>
              <div class="c-list-1__price c2 fs26 u-lh-1 u-fwb">￥{{ item.amount }}</div>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
    <div class="c-panel">
      <div class="c-panel__head c-panel__head-underline">
        <div class="c-panel__title c3 fs36 u-fwb">朋友都在测</div>
        <div
          class="c-panel__more c5 fs26 u-vc"
          @click="switchTab('/pages/tab-bar/categories/main')">
          更多
        </div>
      </div>
      <div class="c-panel__body">
        <CList
          :items="detail.friends"
          @clickitem="navigateTo('/pages/topic/main')" />
      </div>
    </div>
  </div>
</template>

<script>
  import CSwiper from '@/components/swiper'
  import CList from '@/components/list'

  export default {
    data () {
      return {
        detail: {
          banner: [],
          hots: [],
          friends: []
        }
      }
    },
    components: {
      CSwiper,
      CList
    },
    methods: {
      async getDetail () {
        const result = await this.$bridge.request({ url: 'index' })
        const data = result.data.data[0]

        this.detail.banner = data.banner
        this.detail.friends = data.friends
        this.detail.hots = data.hots
      }
    },
    onShow () {
      this.getDetail()
    },
    onShareAppMessage: function (res) {
      return {
        title: '您的好友分享了一张',
        desc: '测试测杀杀杀杀杀杀杀杀杀',
        path: 'pages/tab-bar/index/main',
        success: function (res) {
          console.log('转发成功')
        },
        fail: function (res) {
          console.log('转发失败:')
        }
      }
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
