<template>
    <div class="c-panel">
        <div class="c-panel__body c-list" @click="handleUrl">
            <div v-for="(item, index) in paneldata" :key="index" :data-id="item.id" class="c-list__item" @click="aa($event)">
                <div class="c-list__title u-c3 u-fs30 u-lh-1 u-fwb u-to">{{ item.title }}</div>
                <div class="c-list__desc u-c5 u-fs22 u-lh-1 u-to">{{ item.subtitle }}</div>
                <div class="c-list__price u-c2 u-fs26 u-lh-1 u-fwb">￥{{ item.amount }}</div>
                <div class="c-list__addon u-c5 u-fs22 u-lh-1">{{ item.usetimes }}人已测</div>
                <image class="c-list__image u-vc" :src="consts.CDN_URL + '/demos/pages/tab-bar/index/list/1.jpg'" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    paneldata: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    handleUrl () {
      this.$emit('answer')
    }
  }
}
</script>

