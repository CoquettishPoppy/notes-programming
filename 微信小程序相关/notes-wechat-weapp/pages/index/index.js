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
  },
  addCart (e) {
    if (e.touches && e.touches[0] || e.detail && e.detail.touches) {
      this.setData({
        position: (e.touches && e.touches[0]) ? e.touches[0] : e.detail.touches[0]
      })
    }
  }
})
