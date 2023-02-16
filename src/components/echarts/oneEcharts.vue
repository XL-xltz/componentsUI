<template>
  <div>
    <div ref="local" :style="boxStyle"></div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    // 点击事件
    clickOnMap: {
      type: Boolean,
      default: false
    },
    // 宽
    width: {
      type: String,
      default: '800px'
    },
    // 高
    height: {
      type: String,
      default: '400px'
    },
    // 数据源
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      mycharts: null
    }
  },
  computed: {
    boxStyle() {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  filters: {},
  watch: {},
  created() {},
  mounted() {
    this.setMychatOptions()
  },
  methods: {
    setMychatOptions() {
      this.mycharts = this.$echarts.init(this.$refs.local)
      this.mycharts.setOption(this.options)
      // 点击事件
      if (this.clickOnMap) {
        // 调用 Vue 中的this
        const _that = this
        this.mycharts.on('click', function() {
          console.log(_that)
          _that.$emit('chatClick', 1)
          console.log(this)
        })
      } else {
        console.log('关闭点击事件')
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
