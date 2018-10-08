<template>
  <div class="c-list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="c-list__item"
      @click="handleClick(item.id)">
      <div class="c-list__title c3 fs30 u-fwb">{{ item.title }}</div>
      <div class="c-list__subtitle c5 fs22">{{ item.subtitle }}</div>
      <div class="c-list__price c2 fs26 u-fwb">￥{{ item.amount }}</div>
      <div class="c-list__addon c5 fs22">{{ item.usetimes }}人已测</div>
      <image
        class="c-list__image u-vc"
        :src="item.thumb" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      handleClick (id) {
        this.$emit('clickitem', id)
      }
    }
  }
</script>

