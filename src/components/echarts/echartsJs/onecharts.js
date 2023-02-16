export default {
  title: {
    text: '业绩报表'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  //图表选择栏
  legend: {
    icon: 'circle',
    // top: 20,
    bottom: 0,
    itemHeight: 10, //修改icon图形大小
    textStyle: {
      fontSize: 12
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五']
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  series: [
    {
      //里层的柱子
      name: '必选场景',
      type: 'pictorialBar', //象形柱状图
      barWidth: 20, //柱子的宽度
      data: [72, 79, 70, 67, 59], //柱子的数据
      symbol: 'rect', //柱子的形状
      symbolRepeat: true, //是否重复
      symbolOffset: [-40, 0], //柱子的位置
      symbolBoundingData: 1, //图形的个数
      z: 12 //柱子的层级
    },
    {
      //外层的柱子
      name: '拟建必选场景',
      type: 'pictorialBar',
      barWidth: 20,
      //symbolSize: [40, 18], //调整截面形状
      symbolOffset: [-40, 0],
      symbol: 'rect',
      symbolRepeat: true,
      symbolBoundingData: 1,
      itemStyle: {
        color: ''
      },
      data: [82, 89, 90, 97, 79]
    },
    {
      //里面的柱子
      name: '可选场景',
      type: 'pictorialBar',
      data: [73, 80, 71, 75, 64],
      barWidth: 20,
      symbol: 'rect',
      symbolRepeat: true,
      symbolOffset: [0, 0],
      symbolBoundingData: 1,
      z: 12
    },
    {
      //外面的柱子
      name: '拟建可选场景',
      type: 'pictorialBar',
      barWidth: 20,
      //symbolSize: [0, 18], //调整截面形状
      symbolOffset: [0, 0],
      symbol: 'rect',
      symbolRepeat: true,
      symbolBoundingData: 1,
      itemStyle: {
        color: ''
      },
      data: [82, 89, 89, 97, 79]
    },
    {
      //里面的柱子
      name: '能力',
      type: 'pictorialBar',
      data: [73, 80, 71, 75, 64],
      barWidth: 20,
      symbol: 'rect',
      symbolRepeat: true,
      symbolOffset: [40, 0],
      symbolBoundingData: 1,
      z: 12
    },
    {
      //外面的柱子
      name: '拟建能力',
      type: 'pictorialBar',
      barWidth: 20,
      //symbolSize: [40, 18], //调整截面形状
      symbolOffset: [40, 0],
      symbol: 'rect',
      symbolRepeat: true,
      symbolBoundingData: 1,
      itemStyle: {
        color: ''
      },
      data: [82, 89, 89, 97, 79]
    }
  ]
}
