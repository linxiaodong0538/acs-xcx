<template>
  <div class="p-tab-bar-my-index">
    <div class="pb-user">
      <image
        class="pb-user__avatar"
        :src="user.avatarUrl" />
      <div class="pb-user__name c1 f26">{{ user.nickName }}</div>
    </div>
    <div class="o-box u-mb-14">
      <div class="c-list-2 c3 f28">
        <div
          class="c-list-2__item is-link"
          @click="navigateTo('/pages/tab-bar/my/receive/main')">
          <div class="c-list-2__icon c-icon c-icon--receive"></div>
          <div class="c-list-2__title">收到的赠送</div>
        </div>
        <div
          class="c-list-2__item is-link"
          @click="navigateTo('/pages/tab-bar/my/give/main')">
          <div class="c-list-2__icon c-icon c-icon--give"></div>
          <div class="c-list-2__title">给好友的赠送记录</div>
        </div>
        <div
          class="c-list-2__item is-link"
          @click="navigateTo('/pages/tab-bar/my/good-man-card/main')">
          <div class="c-list-2__icon c-icon c-icon--record"></div>
          <div class="c-list-2__title">使用好人卡获取记录</div>
        </div>
      </div>
    </div>
    <div class="o-box">
      <ul class="c-tabs c3 f26">
        <li
          v-for="(item, index) in tabs"
          :key="index"
          class="c-tabs__item"
          :class="{'is-active': current === item.value}"
          @click="handleSwitchTab(item.value)">
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div
      v-for="(item1, index1) in orderKeys"
      v-show="item1 === current"
      :key="index1"
      class="c-tabs__content">
      <div class="c-panel">
        <div class="c-panel__body c-list">
          <div
            v-for="(item2, index2) in orders[item1]"
            :key="index2"
            class="u-mb-14"
            @click="navigateTo('/pages/detail/main?id=' + item2.projectid)">
            <div
              class="c-list__item">
              <div class="c-list__title c3 f30">{{ item2.title }}</div>
              <div class="c-list__subtitle c5 f22">{{ item2.subtitle }}</div>
              <div class="c-list__price c2 f26">¥{{ item2.amount }}</div>
              <div class="c-list__addon c5 f22">{{ item2.usetimes }} 人已测</div>
              <image
                class="c-list__image"
                :src="item2.thumb" />
            </div>
            <div class="o-box pb-order c5 f22">
              <div class="pb-order__no">
                订单编号：
                <text class="c3">{{ item2.sn }}</text>
              </div>
              <div class="pb-order__buy">购买时间：{{ item2.addtime }}</div>
              <div class="pb-order__finish">完成时间：{{ item2.usetime }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { utils } from 'mp-client'
  import onShareAppMessageMixin from '@/utils/mixins/onShareAppMessage'

  export default {
    mixins: [onShareAppMessageMixin],
    data () {
      return {
        user: {},
        tabs: [
          {
            value: 'all',
            label: '全部'
          },
          {
            value: 'finished',
            label: '已完成'
          },
          {
            value: 'draft',
            label: '草稿箱'
          }
        ],
        orders: {
          all: [],
          finished: [],
          draft: []
        },
        current: 'all'
      }
    },
    computed: {
      orderKeys () {
        return Object.keys(this.orders)
      }
    },
    methods: {
      handleSwitchTab (value) {
        this.current = value
      },
      handleClickOrder (id) {
        this.$bridge.navigateTo({ url: `/pages/detail/main?id=${id}` })
      }
    },
    async mounted () {
      this.user = this.$auth.get()['user']

      const ordersRes = await this.$bridge.request({ url: 'mine/orders' })
      const orders = ordersRes.data.data || []
      const filter = item => ({
        ...item,
        addtime: item.addtime ? utils.time.getTime(item.addtime * 1000) : '',
        usetime: item.usetime ? utils.time.getTime(item.usetime * 1000) : ''
      })

      this.orders.all = (orders[0] || []).map(item => filter(item))
      this.orders.finished = (orders[1] || []).map(item => filter(item))
      this.orders.draft = (orders[2] || []).map(item => filter(item))
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
