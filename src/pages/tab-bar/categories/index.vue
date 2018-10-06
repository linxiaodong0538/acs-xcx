<template>
  <div class="p-tab-bar-categories">
    <ul class="pb-category-list u-cf">
      <li
        v-for="(item, index) in categories"
        :key="index"
        class="pb-category-list__item fs28 u-tac"
        :class="{ 'is-active': index === current }"
        @click="handleSelect(index)">
        {{ item.name }}
      </li>
    </ul>
    <div class="c-panel">
      <div class="c-panel__body">
        <CList :items="panel" />
      </div>
    </div>
  </div>
</template>

<script>
  import CList from '@/components/list'

  export default {
    components: {
      CList
    },
    data () {
      return {
        categories: [],
        panel: [],
        current: 0
      }
    },
    methods: {
      handleSelect (index) {
        this.current = index
      },
      async gethcData () {
        const allRes = await Promise.all([
          this.$bridge.request({ url: 'category' }),
          this.$bridge.request({ url: 'index' })
        ])
        this.categories = allRes[0].data.data[0]
        this.panel = allRes[1].data.data[0].friends
      }
    },
    onShow () {
      this.gethcData()
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
