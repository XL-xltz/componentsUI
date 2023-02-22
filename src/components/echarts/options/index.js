// data 为接收的参数
const testBar = data => {
  console.log(data, '接收到数据了')
  // 图表源配置项
  const defaultConfig = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        // data: [120, 1000, 150, 80, 70, 110, 130],
        data: data,
        type: 'bar'
      }
    ]
  }
  // 拷贝出 新的配置项
  const opt = Object.assign({}, defaultConfig)
  // 返回新的配置项
  return opt
}
export default {
  // 默认导出源数据
  testBar
}
