<template>
  <div>
    <el-pagination background layout="prev, pager, next" :total="pag.total" @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    // 分页所需
    pag: {
      type: Object,
      default() {
        return {
          pageSize: 10,
          pageNumber: 1,
          total: 0
        }
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  filters: {},
  watch: {},
  created() {},
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.$emit('nextList', val)
    }
  }
}
</script>

<style lang="scss" scoped></style>
