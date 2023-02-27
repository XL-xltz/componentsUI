import Vue from 'vue'
import { throttle, debounce } from './component/throttle.js'
import { ClickToJudge, lazy } from './component/utils.js'
const directives = {
  // 节流函数
  throttle,
  debounce,
  ClickToJudge,
  lazy
}
console.log(Object.keys(directives))
Object.keys(directives).forEach(keys => Vue.directive(keys, directives[keys]))
