let app = getApp();
Component({
  properties: {
  },
  data: {
    items: [
      {
        name: '热拿铁',
        price: '28.0',
        amount: '1',
        productId: 0
      },
      {
        name: '榴莲千层蛋糕',
        price: '14.0',
        amount: '2',
        productId: 1
      }
    ]
  },
  methods: {
    touchStart: function (e) {
      if (e.touches.length == 1) { // 判断是否触摸到
        this.data.startX = e.touches[0].clientX // 设置触摸起始点水平方向的位置
      }
    },
    touchMove: function (e) {
      if (e.touches.length == 1) {
        let moveX = e.touches[0].clientX // 手指移动时水平方向位置
        let disX = this.data.startX - moveX // 手指起始点与移动之间的差值
        let btnWidth = 180 // 按钮的width
        let detailStyle = ''
        if (disX <= 0) { // 没有移动距离或者是向右侧移动
          detailStyle = 'left:0'
        } else if (disX > 0) { // 移动距离大于0
          detailStyle = 'left:-' + disX + 'rpx'
        } else if (disX >= btnWidth / 2) { // 移动距离大于按钮width的一半
          detailStyle = 'left:-' + btnWidth + 'rpx'
        }
        //获取手指触摸的是哪一项
        let index = e.currentTarget.dataset.index
        let data = {}
        data['items[' + index + '].detailStyle'] = detailStyle // 更新数据
        this.setData(data)
      }
    },
    touchEnd: function (e) {
      if (e.changedTouches.length == 1) { // 判断是否触摸到
        let endX = e.changedTouches[0].clientX // 手指移动结束后的位置
        let disX = this.data.startX - endX // 触摸开始与结束手指移动的距离
        let btnWidth = 180 // 按钮的width
        // 如果移动距离小于按钮width的1/2则不显示按钮
        let detailStyle = disX > btnWidth / 2 ? 'left:-' + btnWidth + 'rpx' : 'left:0'
        //获取手指触摸的是哪一项
        let index = e.currentTarget.dataset.index
        let data = {}
        data['items[' + index + '].detailStyle'] = detailStyle // 更新数据
        this.setData(data)
      }
    }
  }
})