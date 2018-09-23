<template>
  <div class="p-tab-bar-my">
      <div class="pb-user">
      <image class="pb-user__avatar" src="http://localhost:88/demos/pages/tab-bar/my/avatar.jpg" />
      <div class="pb-user__name u-c1 u-fs26 u-lh-1 u-tac">发顺丰的说法</div>
    </div>
    <div class="o-box u-mb-14">
      <div class="c-list-2 u-c3 u-fs28">
        <div class="c-list-2__item is-link">
          <div class="c-list-2__icon c-icon c-icon--receive"></div>
          <div class="c-list-2__title">收到的赠送</div>
        </div>
        <div class="c-list-2__item is-link">
          <div class="c-list-2__icon c-icon c-icon--give"></div>
          <div class="c-list-2__title">给好友的赠送记录</div>
        </div>
        <div class="c-list-2__item is-link">
          <div class="c-list-2__icon c-icon c-icon--record"></div>
          <div class="c-list-2__title">使用好人卡获取记录
      </div>
        </div>
      </div>
    </div>
    <div class="o-box">
      <div class="c-tabs u-c3 u-fs26">
        <ul class="c-tabs__title">
          <li class="c-tabs__item" :class="{'is-active': current == index}" v-for="(item, index) in tabs" :key="index" @click="tab(index)">{{item}}</li>
        </ul>
        <div class="c-tabs__content" v-show="index == current" v-for='(itemCont,index) in tabContents' :key="index">{{itemCont}}</div>
      </div>
    </div>
    <div class="c-panel">
      <div class="c-panel__body c-list">
        <div v-for="(item, index) in [0]" :key="index" class="c-list__item">
          <div class="c-list__title u-c3 u-fs30 u-lh-1 u-fwb u-to">{{ item }} - 是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发</div>
          <div class="c-list__desc u-c5 u-fs22 u-lh-1 u-to">胜多负少的</div>
          <div class="c-list__price u-c2 u-fs26 u-lh-1 u-fwb">¥11</div>
          <div class="c-list__addon u-c5 u-fs22 u-lh-1">11人已测</div>
          <image class="c-list__image u-vc" src="http://localhost:88/demos/pages/tab-bar/index/list/1.jpg" />
        </div>
        <div class="o-box pb-order u-c5 u-fs22 u-lh-1">
          <div class="pb-order__no">
            订单编号：
            <text class="u-c3">6898982342198811238087</text>
          </div>
          <div class="pb-order__buy">购买时间：2018-02-03</div>
          <div class="pb-order__finish">完成时间：2018-07-29</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {},
  data () {
    return {
      tabs: ['全部测试', '已完成', '草稿箱'],
      tabContents: ['内容一', '内容二', '内容三'],
      current: 0
    }
  },
  methods: {
    tab (index) {
      this.current = index
    }
  },
  mounted () {}
}
</script>

<style lang="scss" src="./styles.scss"></style>
