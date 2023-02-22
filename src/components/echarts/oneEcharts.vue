<template>
  <div>
    <div ref="hist" :style="boxStyle"></div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    // 传递的数据
    mapInit: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // 数据源
      mycharts: null,
      // 需要接收的原来的数据
      list: {
        width: '1000px',
        height: '600px',
        //配置项 && 数据
        option: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
      }
    }
  },
  computed: {
    // 宽高
    boxStyle() {
      return {
        width: this.list.width,
        height: this.list.height
      }
    }
  },
  filters: {},
  watch: {
    // 监听传递的数据
    mapInit: {
      handler(newVal) {
        console.log(newVal, 'asd')
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    this.initConfig()
  },
  mounted() {
    this.onChat()
  },
  methods: {
    //
    initConfig() {
      // 配置
      for (let keys in this.mapInit) {
        console.log(keys, Object.keys(this.list))
        if (Object.keys(this.list).includes(keys)) {
          this.list[keys] = this.mapInit[keys]
        } else {
          console.error('组件配置项中没有' + keys)
        }
      }
    },
    // 图表实
    onChat() {
      this.mycharts = this.$echarts.init(this.$refs.hist)
      console.log(this.list.option)
      this.mycharts.setOption(this.list.option)
    }
  }
}
</script>

<style scoped>
.asd {
  width: 300px;
  height: 300px;
}
</style>
