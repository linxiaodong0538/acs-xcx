<template>
    <div class="c-panel">
        <div class="c-panel__body c-list">
            <div v-for="(item, index) in [0, 1, 2, 3]" :key="index" class="c-list__item">
                <div class="c-list__title u-c3 u-fs30 u-lh-1 u-fwb u-to">{{ item }} - 是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发</div>
                <div class="c-list__desc u-c5 u-fs22 u-lh-1 u-to">胜多负少的</div>
                <div class="c-list__price u-c2 u-fs26 u-lh-1 u-fwb">¥11</div>
                <div class="c-list__addon u-c5 u-fs22 u-lh-1">11人已测</div>
                <image class="c-list__image u-vc" src="http://localhost:88/demos/pages/tab-bar/index/list/1.jpg" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

