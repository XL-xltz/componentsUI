// 节流 间隔时间内只被触发一次
// 地铁 -- 定时关门
export const throttle = {
  //被绑定元素的节点
  inserted: function(el, binding) {
    // 点击后拿到的数据
    let [fn, data, event, time = 500] = binding.value
    // console.log(disabled, 'dis')
    // 节流阀
    let timer
    // 拿到点击事件
    el.addEventListener(event, () => {
      if (timer) return
      timer = setTimeout(() => {
        fn(data)
        timer = null
      }, time)
    })
  }
}
// 防抖 只触发最后一次
// 公交车 -- 人都上齐之后等一段时间发动
export const debounce = {
  // 拿到元素节点
  inserted: function(el, binding) {
    const [fn, event, time = 500] = binding.value
    let timer
    // 点击事件
    el.addEventListener(event, () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn()
      }, time)
    })
  }
}
