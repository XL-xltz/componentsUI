<template>
  <div>
    <div class="tableCon">
      <el-table :data="tableData" :style="initTableCourse.tableStyle" border>
        <el-table-column :type="choice === 1 ? 'selection' : 'index'" width="55"> </el-table-column>
        <el-table-column
          v-for="(item, index) in initTableCourse.t_head"
          :key="item.props"
          ,:prop="item.prop"
          :label="item.label"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    //数据源
    table_config: {
      type: Object,
      default: () => {}
    },
    // 多选或者是单选
    choice: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // 模拟数据源
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      // 获取数据源
      initTableCourse: {
        // 表头
        t_head: [],
        // style
        tableStyle: {
          width: '1000px'
        }
      }
    }
  },
  computed: {},
  filters: {},
  watch: {
    // 监听数据源
    table_config: {
      handler(newVal, oldVal) {
        // 初始化跟组件数据
        this.initConfig()
        // console.log(newVal, '数据源')
      },
      immediate: true,
      deep: true
    }
  },
  created() {},
  methods: {
    // 判断跟组件数据源中有无数据
    initConfig() {
      for (let keys in this.table_config) {
        console.log(this.table_config, 'init')
        if (Object.keys(this.initTableCourse).includes(keys)) {
          this.initTableCourse[keys] = this.table_config[keys]
        }
      }
    }
  }
}
</script>

<style scoped></style>
