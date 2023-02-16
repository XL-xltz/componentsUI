<template>
  <div>
    <ltables
      :ltable="ltableW"
      :ltable-data="tableData"
      :lcolumns="columns"
      :pag="date"
      @seeClick="seeChange"
      @nextList="newList"
    >
      <!-- 123 -->
      <template v-slot:footer>
        <div>尾巴</div>
      </template>
      <template v-slot:hater>
        <div>头发</div>
      </template>
    </ltables>
    <ltables />
  </div>
</template>

<script>
// import ltable from '../components/l-table.vue'
import axios from 'axios'
export default {
  name: 'index',
  components: {
    // ltable
  },
  data() {
    return {
      date: {
        pageSize: 10,
        pageNumber: 1,
        total: 0
      },
      // 子组件数据源
      children: [],
      // 操作栏
      actionBar: [],
      // 宽度
      ltableW: '50',
      // 表头
      columns: [
        { label: '姓名', prop: 'name', key: '1', width: '150' },
        { label: '日期', prop: 'date', key: '2', width: '150' },
        { label: '地址', prop: 'address', key: '3', width: '300' }
      ],
      // 数据源
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区  金沙江路 1518 弄'
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
      ]
    }
  },
  computed: {},
  filters: {},
  watch: {},
  created() {
    // 请求数据
    this.getList()
  },
  methods: {
    // 点击查看
    seeChange(res) {
      console.log(res, '父组件收到啦')
      // console.log(res, '父组件收到啦')
    },
    async getList() {
      // axios.post('api/userList', this.date).then(res => {
      //   console.log(res)
      // })
      const res = await axios.post('api/userList', this.date)
      console.log(res.data)
      this.tableData = res.data.data
      // 返回值
      this.date.total = res.data.total
    },
    newList(val) {
      console.log(val)
      this.date.pageNumber = val
      this.getList()
    }
  }
}
</script>

<style scoped></style>
