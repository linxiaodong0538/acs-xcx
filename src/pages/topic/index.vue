<template>
    <div class="p-swiper">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="2500"
      @change="handleChange" class="pb-siwper-wrapper u-bg-c1">
      <swiper-item
        v-for="(item, index) in topicData.questions"
        :key="index">
          <div class="pb-siwper-wrapper__content">
            <p class="u-tac pb-siwper-wrapper__title fs36">{{item.subject}}</p>
            <radio-group class="pb-siwper-wrapper__radio-group" @change="radioChange">
              <label class="pb-siwper-wrapper__radio" v-for="(options, i) in item.options" :key="i">
                <span class="fs32">{{options.option}}</span>
                <radio :value="options.option" :checked="true" color="#FED02F" :data-id="options.id"/> 
              </label>
            </radio-group>
          </div>
      </swiper-item>
    </swiper>
    <div class="pb-siwper-indicator u-tac">
      <span class="pb-siwper-indicator__top fs40">{{current + 1}}</span>
      <span class="pb-siwper-indicator__bottom fs40 c5">{{ pageNum }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topicData: {},
      current: 0
    }
  },
  computed: {
    pageNum () {
      return this.topicData.questions.length
    }
  },
  methods: {
    handleChange (e) {
      this.current = e.mp.detail.current
    },
    async getAnswer () {
      let res = await this.$bridge.request({
        url: 'project/gotest/1'
      })
      if (res.data.code === 0) {
        this.topicData = res.data.data[0]
      }
    },
    radioChange (e) {
      console.log(e.mp)
    }
  },
  async created () {
    await this.getAnswer()
  }
}
</script>

<style lang="scss" src="./styles.scss" scope></style>
