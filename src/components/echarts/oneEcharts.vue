<template>
  <div>
    <div ref="hist" :style="{ height: height, width: width }"></div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      // 图表
      chart: null
    }
  },
  props: {
    // 宽
    width: {
      type: String,
      default: '400px'
    },
    // 高
    height: {
      type: String,
      default: '400px'
    },
    // 图表的配置
    chartOption: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {},
  filters: {},
  watch: {
    // 监听传递的数据 并确保是最新值
    chartOption: {
      handler(newVal) {
        // 取保拿到最新值
        this.setOptions(newVal)
      },
      deep: true
    }
  },
  created() {},
  mounted() {
    this.initChart()
  },
  methods: {
    // 初始化 图表
    initChart() {
      // 拿到容器
      this.chart = this.$echarts.init(this.$refs.hist)
      // 挂载 配置对象
      this.chart.setOption(this.chartOption)
      // 点击事件
    },
    setOptions(option) {
      if (this.chart) {
        // 有传递的新值 ，那就重新渲染一遍 配置对象
        this.chart.setOption(option)
      }
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
