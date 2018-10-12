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
          :class="{'is-active': current === index}"
          @click="handleSwitchTab(index)">
          {{ item }}
        </li>
      </ul>
      <div
        v-for='(item1, index1) in [0, 1, 2]'
        v-show="index1 === current"
        :key="index1"
        class="c-tabs__content">
        {{ index1 === current }}-{{ orders[0].length }}
        <div class="c-panel">
          <div class="c-panel__body c-list">
            <div
              v-for="(item2, index2) in orders[index1]"
              :key="index2">
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
  </div>
</template>

<script>
  import { utils } from 'mp-client'

  export default {
    created () {},
    data () {
      return {
        user: {},
        tabs: ['全部测试', '已完成', '草稿箱'],
        orders: [[], [], []],
        current: 0
      }
    },
    methods: {
      handleSwitchTab (index) {
        this.current = index
      }
    },
    async mounted () {
      this.user = this.$auth.get()['user']
      const ordersRes = await this.$bridge.request({ url: 'mine/orders' })
      this.orders[0] = ordersRes.data.data[0].map(item => {
        return {
          ...item,
          addtime: item.addtime ? utils.time.getTime(item.addtime * 1000) : '',
          usetime: item.usetime ? utils.time.getTime(item.usetime * 1000) : ''
        }
      })

      console.log(this.orders.all)
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
