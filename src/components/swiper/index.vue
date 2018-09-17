<template>
  <div class="c-swiper">
    <swiper
      :circular="true"
      :autoplay="true"
      :interval="2500"
      @change="handleChange">
      <swiper-item
        v-for="(item, index) in items"
        :key="index">
        <image
          mode="aspectFill"
          :src="item.image"
          @click="handleClick(item)" />
      </swiper-item>
    </swiper>
    <div class="cc-indicator u-lh-1">
      <span
        v-for="(item, index) in indicatorItems"
        :key="index"
        :class="[ 'cc-indicator__item', { 'is-active': item === current } ]"></span>
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
    data () {
      return {
        current: 0
      }
    },
    computed: {
      indicatorItems () {
        return Array.from({ length: this.items.length }, (v, k) => k)
      }
    },
    methods: {
      handleChange (e) {
        this.current = e.mp.detail.current
      },
      handleClick () {}
    },
    mounted () {}
  }
</script>

<style lang="scss" src="./styles.scss"></style>
