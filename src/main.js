import Vue from 'vue'
import App from './App.vue'
import router from './router'
// elmenet
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//echrats
import * as echarts from 'echarts'
// 注册自己的业务组件
import Components from './components/index.js'
// 全局样式
import './style/index.css'

// 测试
import '../src/components/echarts/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
// 自己的业务组件注册城插件
Vue.use(Components, '使用自己的组件了')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
