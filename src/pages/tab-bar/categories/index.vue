<template>
  <div class="p-tab-bar-categories">
    <ul class="pb-category-list">
      <li
        v-for="(item, index) in categories"
        :key="index"
        class="pb-category-list__item f28"
        :class="{ 'is-active': index === current }"
        @click="handleSelect(index)">
        {{ item.name }}
      </li>
    </ul>
    <div
      class="c-panel"
      v-if="!!projects.length">
      <div class="c-panel__body">
        <CList
          :items="projects"
          @clickitem="handleClickListItem" />
      </div>
    </div>
  </div>
</template>

<script>
  import CList from '@/components/list'
  import onShareAppMessageMixin from '@/utils/mixins/onShareAppMessage'

  export default {
    mixins: [onShareAppMessageMixin],
    components: {
      CList
    },
    data () {
      return {
        categories: [],
        projects: [],
        current: 0
      }
    },
    methods: {
      async handleSelect (index) {
        this.current = index
        this.projects = await this.getProjects(this.categories[index].id)
      },
      async getCategories () {
        const categoriesRes = await this.$bridge.request({ url: 'category' })
        return categoriesRes.data.data[0]
      },
      async getProjects (id) {
        const projectsRes = await this.$bridge.request({
          url: 'projects',
          data: { categoryid: id || this.categories[0].id }
        })
        return projectsRes.data.data[0]
      },
      handleClickListItem (id) {
        this.$bridge.navigateTo({ url: `/pages/detail/main?id=${id}` })
      }
    },
    async onShow () {
      this.current = 0
      this.categories = await this.getCategories()
      this.projects = await this.getProjects()
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
