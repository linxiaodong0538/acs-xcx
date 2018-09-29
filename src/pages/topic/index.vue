<template>
  <div class="p-swiper">
    <swiper :circular="true" :autoplay="false" :interval="2500" @change="handleChange" class="pb-siwper-wrapper u-bg-c1">
      <swiper-item v-for="(item, index) in topicData.questions" :key="index">
        <div class="pb-siwper-wrapper__content">
          <p class="u-tac pb-siwper-wrapper__title fs36">{{item.subject}}</p>
          <radio-group class="pb-siwper-wrapper__radio-group" >
            <label class="pb-siwper-wrapper__radio" v-for="(options, i) in item.options" :key="i">
              <span class="fs32">{{options.option}}</span>
              <radio :value="options.option"  color="#FED02F" :data-nextid="options.nextquesid" :data-answerid="options.nextquesid" @click="handleSelect(index,$event)"/>
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
      current: 0,
      questionNum: 0
    }
  },
  computed: {
    pageNum () {
      return this.topicData.questions ? this.topicData.questions.length : 0
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
        this.questionNum = res.data.data[0].questions.length
      }
    },
    handleSelect (index, event) {
      // console.log(event)
      // 下一题对应的nextquesid
      let currenId = event.currentTarget.dataset.nextid
      // 测试结果id
      let answerId = event.currentTarget.dataset.answerid
      // 当前题目id不要匹配
      let exclud = this.topicData.questions.slice(index, index + 1)
      let selfId = exclud[0].id
      // 返回对应下一题的对象
      let oQuestion = this.topicData.questions.filter((next, i, arr) => {
        return currenId === next.id && currenId !== selfId
      })
      oQuestion.forEach(obj => {
        // 如果当前题目数量小于等于原始的题目数量 则改变下一题 插入新匹配的一题
        if (this.topicData.questions.length <= this.questionNum) {
          this.topicData.questions.splice(index + 1, 1, obj)
        }
      })
      if (answerId) {
        wx.showModal({
          title: '测试结束是否提交',
          content: 'cccccccccccccccc',
          cancelColor: '#FED02F',
          success: e => {
            console.log(e)
          }
        })
      }
    }
  },
  mounted () {
    this.getAnswer()
  }
}
</script>

<style lang="scss" src="./styles.scss" scope></style>
