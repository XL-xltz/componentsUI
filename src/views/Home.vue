<template>
  <div>
    <tables :table_config="source_config" />
  </div>
</template>

<script>
import tables from '../components/table/table.vue'
export default {
  name: '',
  components: {
    tables
  },
  data() {
    return {
      source_config: {
        // 表头
        t_head: [
          { prop: 'date', label: '日期' },
          { prop: 'name', label: '姓名' },
          { prop: 'address', label: '地址' }
        ],
        tableStyle: {
          width: '900px'
        }
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

<style scoped></style>
