<template>
  <div class="p-ask-for-finish">
    <div class="pb-head">
      <div class="pb-avatar c-avatar c-avatar--3">
        <image
          class="c-avatar__image"
          :src="consts.CDN_URL + '/demos/pages/tab-bar/my/avatar.jpg'" />
        <div class="c-avatar__text c3 f28">vivi的好人卡收集任务完成啦！为了更了解自己，推荐你也来参与测试</div>
      </div>
    </div>
    <div class="pb-panel c-panel">
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
        panel: [
          {
            title: 'a',
            subtitle: 'b',
            amount: 2,
            usetimes: 11,
            thumb: ''
          },
          {
            title: 'a',
            subtitle: 'b',
            amount: 2,
            usetimes: 11,
            thumb: ''
          }
        ]
      }
    }
  }
</script>

<style lang="scss" src="./styles.scss"></style>
