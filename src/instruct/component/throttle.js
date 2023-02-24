// 节流
export const throttle = {
  //被绑定元素的节点
  inserted: function(el, binding) {
    // 点击后拿到的数据
    const [fn, data, event, time] = binding.value
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
