<template>
  <div class="p-tab-bar-categories">
    <ul class="pb-category-list u-cf">
      <li v-for="(item, index) in categories" :key="index" class="pb-category-list__item u-fs28 u-tac" :class="{ 'is-active': index === current }" @click="handleSelect(index)">
        {{ item.name }}
      </li>
    </ul>
    <panel :paneldata="panel"></panel>
  </div>
</template>

<script>
import Panel from '@/components/panel'
export default {
  components: {
    Panel
  },
  created () {},
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
      let token = this.$auth.get()['token']
      let result = await Promise.all([
        this.$request({
          requiresAuth: true,
          url: 'category',
          data: { token }
        }),
        this.$request({
          requiresAuth: true,
          url: 'index',
          data: { token }
        })
      ])
      console.log(result)
      this.categories = result[0].data.data[0]
      this.panel = result[1].data.data[0].friends
    }
  },
  mounted () {
    this.gethcData()
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
