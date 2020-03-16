const app = getApp()

Page({
  data: {
  },
  onLoad: function () {

  },
  onShow: function () {

  },
  countDown () {
    let countDownComponent = this.selectComponent('#countDown')
    countDownComponent.leftCount()
  }
})
