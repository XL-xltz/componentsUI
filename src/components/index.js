// table 组件
import ltable from './l-table.vue'
// 分页组件
import pag from './pag.vue'
// 注册
export default {
  install(Vue, option) {
    console.log(option)
    Vue.component('ltables', ltable)
    Vue.component('pages', pag)
  }
}
