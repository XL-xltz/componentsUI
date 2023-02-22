// table 组件
//
import ATable from './table/table'
// 分页组件
import pag from './pag/pag'
// 注册
export default {
  install(Vue, option) {
    console.log(option)
    Vue.component('ATable', ATable)
    Vue.component('pages', pag)
  }
}
