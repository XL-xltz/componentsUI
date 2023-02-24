import Vue from 'vue'
import { throttle } from './component/throttle.js'
const directives = {
  // 节流函数
  throttle
}
console.log(Object.keys(directives))
Object.keys(directives).forEach(keys => Vue.directive(keys, directives[keys]))
