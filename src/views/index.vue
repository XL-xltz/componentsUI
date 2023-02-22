<template>
  <div>
    <div>
      <emap :chart-option="chartOpt" />
    </div>
  </div>
</template>

<script>
import emap from '../components/echarts/oneEcharts.vue'
import test from '../components/echarts/index.js'
import { testMap } from '../api/echarts.js'
export default {
  name: '',
  components: {
    emap
  },
  data() {
    return {
      test,
      newSdata: null,
      chartOpt: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    }
  },
  computed: {},
  filters: {},
  watch: {},
  created() {
    this.onData()
  },
  mounted() {},
  methods: {
    async onData() {
      const { AJSON: res } = await testMap()

      this.newSdata = res

      this.chartOpt = test.testBar(this.newSdata)
    }
  }
}
</script>

<style scoped></style>
