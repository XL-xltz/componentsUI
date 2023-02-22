//把o ptions里面定义的图表遍历导入
const modulesFiles = require.context('./options', true, /index.js$/)
//设置一个空 对象 存储遍历的 option
let modules = {}

//返回一个数组，由匹配成功的文件所组成的数组
// console.log(modulesFiles.keys())

// 循环匹配成功的数组
modulesFiles.keys().forEach(item => {
  //=====
  // 循环出 option 配置项
  //   console.log(modulesFiles(item).default)
  ///====
  //
  modules = Object.assign({}, modules, modulesFiles(item).default)
  console.log(modules)
})
// 最终拿到的 配置项
console.log(modules, '全局作用域')

// 默认导出配置项
export default modules
