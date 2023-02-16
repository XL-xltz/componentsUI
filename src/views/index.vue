<template>
  <div>
    <div>
      <eMaps
        :options="option"
        :width="width"
        :height="height"
        @chatClick="onClcik"
        :clickOnMap="onclciks"
        v-if="onpotion"
      />
    </div>
    <div>
      <el-button @click="asd">123</el-button>
    </div>
  </div>
</template>

<script>
import eMaps from '../components/echarts/oneEcharts.vue'
import onechars from '../components/echarts/echartsJs/onecharts.js'
export default {
  name: '',
  components: {
    eMaps
  },
  data() {
    return {
      width: '900px',
      height: '400px',
      onclciks: false,
      option: onechars,
      onpotion: true
    }
  },
  computed: {},
  filters: {},
  watch: {},
  created() {},
  methods: {
    onClcik(val) {
      console.log(val)
    },
    asd() {
      this.onpotion = !this.onpotion
    }
  }
}
</script>

<style lang="scss" scoped></style>
