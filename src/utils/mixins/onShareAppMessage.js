export default {
  onShareAppMessage () {
    return {
      title: '给你推荐一款好准的测试小程序，了解自己从爱测试开始！',
      path: 'pages/tab-bar/index/main',
      imageUrl: `${this.$consts.CDN_URL}/commons/share.png`
    }
  }
}
