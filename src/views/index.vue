<template>
  <div>
    <div>
      <emap :mapInit="map_data" />
    </div>
  </div>
</template>

<script>
import emap from '../components/echarts/oneEcharts.vue'
export default {
  name: '',
  components: {
    emap
  },
  data() {
    return {
      map_data: {
        // 图表数据
        width: '500px',
        height: '500px',
        option: {}
      }
    }
  },
  computed: {},
  filters: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
