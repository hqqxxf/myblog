/**
 * Created by 58 on 2016/11/7.
 */
class CutDown {
  constructor(options) {
    this._default = {
      type: '',
      mode: 'cn', // 类型 cn 为带中文的， en为英文带点的
      ts: 1000 * 60 * 15,
      cb: null, // 回调函数
      end: null // 结束回调函数
    }
    this._opts = Object.assign(this._default, options)
    this.now = Date.now()
    if (this._opts.type !== 'res') this.init()
  }

  init() {
    let me = this
    let timer = null
    timer = setInterval(function () {
      if (me._opts.ts >= 1000) {
        let res = me.getRes()
        me._opts.ts -= 1000
        me._opts.cb && me._opts.cb(res)
      } else {
        clearInterval(timer)
        timer = null
        me._opts.end && me._opts.end()
      }
    }, 1000)
  }

  // get left day
  getLeftDay() {
    return Math.floor(this._opts.ts / (1000 * 60 * 60 * 24))
  }

  // get left Hour
  getLeftHour() {
    return Math.floor(this._opts.ts % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  }

  // get left minutes
  getLeftMinutes() {
    return Math.floor((this._opts.ts % (1000 * 60 * 60)) / (1000 * 60))
  }

  // get left seconds
  getLeftSeconds() {
    return Math.floor((this._opts.ts % (1000 * 60)) / (1000))
  }

  getRes() {
    let res = ''
    let Day = this.getLeftDay()
    let Hour = this.getLeftHour()
    let Minutes = this.getLeftMinutes()
    let Seconds = this.getLeftSeconds()
    // Minutes = this.addPrefix(Minutes)
    Seconds = this.addPrefix(Seconds)
    if (this._opts.mode === 'cn') {
      res = (Day ? Day + '天' : '') + (Hour ? Hour + '小时' : '') + (Minutes ? Minutes + '分钟' : '') + (Seconds && Seconds + '秒')
    } else if (this._opts.mode === 'en') {
      res = (Day ? Day + '天' : '') + (Hour ? Hour + ':' : '') + (Minutes ? Minutes + ':' : '') + (Seconds && Seconds)
    }
    return res
  }

  addPrefix(num) {
    return num > 9 ? num : '0' + num
  }
}

module.exports = CutDown
