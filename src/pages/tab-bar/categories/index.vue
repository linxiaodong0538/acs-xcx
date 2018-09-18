<template>
  <div class="p-tab-bar-categories">
    <ul class="pb-category-list u-cf">
      <li
        v-for="(item, index) in categories"
        :key="index"
        class="pb-category-list__item u-fs28 u-tac"
        :class="{ 'is-active': index === current }"
        @click="handleSelect(index)">
        {{ item.name }}
      </li>
    </ul>
    <!-- <div class="c-panel">
      <div class="c-panel__body c-list">
        <div
          v-for="(item, index) in [0, 1, 2, 3]"
          :key="index"
          class="c-list__item">
          <div class="c-list__title u-c3 u-fs30 u-lh-1 u-fwb u-to">{{ item }} - 是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发是啊啊电风扇发</div>
          <div class="c-list__desc u-c5 u-fs22 u-lh-1 u-to">胜多负少的</div>
          <div class="c-list__price u-c2 u-fs26 u-lh-1 u-fwb">¥11</div>
          <div class="c-list__addon u-c5 u-fs22 u-lh-1">11人已测</div>
          <image
            class="c-list__image u-vc"
            src="http://localhost:88/demos/pages/tab-bar/index/list/1.jpg" />
        </div>
      </div>
    </div> -->
    <panel></panel>
  </div>
</template>

<script>
  import Panel from '@/components/panel'
  export default {
    components: {
      Panel
    },
    created () {
    },
    data () {
      return {
        categories: [],
        current: 0
      }
    },
    methods: {
      handleSelect (index) {
        this.current = index
      },
      async categoriesData () {
        let token = this.$auth.get()['token']
        let result = await this.$request({
          requiresAuth: true,
          url: 'category',
          data: { token }
        })
        this.categories = result.data.data[0]
        console.log(this.categories)
      }
    },
    mounted () {
      this.categoriesData()
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
