let app = getApp();
var timer = null;
Component({
  properties: {

  },
  data: {
    timeLeft: '10:00'
  },
  methods: {
    leftCount () {
      clearInterval(timer)
      let tim = 10 * 60 * 1000 * 0.001
      this.timeCount(tim, res => {
        if (res && res.toString().indexOf('-1') <= -1) {
          this.setData({
            timeLeft: res || ''
          })
        } else {
          this.setData({
            timeLeft: '00:00'
          })
        }
      })
    },
    /**
     * 倒计时
     * @param {*} count  时间戳
     * @return mm分ss秒/  -1 计时结束
     */
    timeCount (count, cb) {
      let mm, ss
      // 解决第一秒空白的bug
      let getCount = function getCount () {
        // 处理时间显示
        mm = Math.floor((count / 60) % 60)
        ss = Math.floor(count % 60)
        if (ss >= 0 && ss < 10) ss = '0' + ss
        if (mm >= 0 && mm < 10) mm = '0' + mm
        typeof cb === 'function' && cb(mm + ':' + ss)
      }
      if (count > 0) {
        getCount()
        timer = setInterval(() => {
          if (count > 0) {
            count-- // 防止第一秒直接显示14:59
            getCount()
          } else {
            clearInterval(timer);
            typeof cb === 'function' && cb(-1)
          }
        }, 1000)
      } else {
        typeof cb === 'function' && cb(-1)
      }
    }
  },
  clearIntervalAll () {
    clearInterval(timer)
  },
  detached: function () {
    this.clearIntervalAll()
  }
})