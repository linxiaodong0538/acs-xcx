<template>
  <div class="p-tab-bar-index">
    <div class="pb-swiper-wrap">
      <CSwiper :items="detail.banner" />
    </div>
    <div class="c-panel">
      <div class="c-panel__head">
        <div class="c-panel__title c3 f36">最热测试</div>
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
              <div class="c-list-1__title c3 f28">{{ item.title }}</div>
              <div class="c-list-1__price c2 f26">￥{{ item.amount }}</div>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
    <div class="c-panel">
      <div class="c-panel__head c-panel__head-underline">
        <div class="c-panel__title c3 f36">朋友都在测</div>
        <div
          class="c-panel__more c5 f26"
          @click="switchTab('/pages/tab-bar/categories/main')">
          更多
        </div>
      </div>
      <div class="c-panel__body">
        <CList
          :items="detail.friends"
          @clickitem="handleClickListItem" />
      </div>
    </div>
  </div>
</template>

<script>
  import CSwiper from '@/components/swiper'
  import CList from '@/components/list'
  import onShareAppMessageMixin from '@/utils/mixins/onShareAppMessage'

  export default {
    mixins: [onShareAppMessageMixin],
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
      },
      handleClickListItem (id) {
        this.$bridge.navigateTo({ url: `/pages/detail/main?id=${id}` })
      }
    },
    onShow () {
      this.getDetail()
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
