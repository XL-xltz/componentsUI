export const ClickToJudge = {
  update: function(el, binding, vnode) {
    console.log(binding)
    const VDATA = vnode.context
    console.log(VDATA.num, 'num')
    switch (VDATA.num) {
      case 1:
        break
      case 2:
        console.log('点击到第二次了')
        break
      case 3:
        VDATA.she()
        console.log('点击到第三次了')
      default:
        if (VDATA.num <= 3) {
          VDATA.num = 0
          console.log('bian wei 0')
        }
        return
    }
  }
}
// 图片懒加载
export const lazy = {
  inserted: function(el, binding, vnode) {
    console.log(binding)
    let img = new Image()
    img.src = binding.value
    console.log(img)
    img.onload = () => {
      el.setAttribute('src', binding.value)
    }
  }
}
