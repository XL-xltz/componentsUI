<template>
  <div>
    <div class="tableCon">
      <el-table :data="tableData" :style="initTableCourse.tableStyle" border>
        <!-- 单选 多选 -->
        <el-table-column :type="initTableCourse.choice ? 'selection' : 'index'" width="55"> </el-table-column>
        <!-- 循环数据源 -->
        <template v-for="(item, index) in initTableCourse.t_head">
          <el-table-column :prop="item.prop" :label="item.label" v-if="item.type">
            <template slot-scope="scope">
              <!-- 开关 -->
              <el-switch
                v-model="scope.row.status"
                active-value="1"
                inactive-value="2"
                v-if="item.type === 'switch_fn'"
              />

              <!-- 常规按钮 -->
              <template v-if="item.type === 'btn'">
                <span class="slot" v-for="(operations, index) in initTableCourse.operation">
                  <el-button
                    v-if="operations.isShow"
                    :icon="operations.icon"
                    :type="operations.type"
                    :style="[{ color: operations.color }]"
                    size="small"
                    >{{ operations.label }}</el-button
                  >
                </span>
              </template>

              <!-- 自定义按钮 -->
              <template v-if="item.type === 'customAction_btn'">
                <span v-for="(items, index) in scope.row[item.prop]">
                  <el-button
                    :icon="items.icon"
                    :type="items.type"
                    :disabled="disabled"
                    v-throttle="[searchcs, scope.row, 'click', 5000]"
                    >{{ items.label }}</el-button
                  >
                </span>
              </template>

              <!-- 头像 -->
              <template v-if="item.type === 'avatar'">
                <el-avatar v-lazy="scope.row.url"></el-avatar>
              </template>

              <!-- 链接跳转 -->
              <template v-if="item.type === 'JumpPage'">
                <div v-text="scope.row.text" @click="goPage(scope.$index)"></div>
              </template>
            </template>
          </el-table-column>
          <!-- 没有 callback -->
          <el-table-column :prop="item.prop" :label="item.label" v-else></el-table-column>
        </template>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a_table',
  components: {},
  props: {
    //数据源
    table_config: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      //是否禁用当前按钮
      disabled: false,
      // 模拟数据源
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: '1',
          text: '跳转',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status: '2',
          text: '跳转',
          customAction: [
            { type: 'danger', label: '删除', color: '#fff', isShow: true },
            { type: 'primary', label: '编辑', color: 'skyblue', isShow: true }
          ]
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          text: '跳转',
          status: '2'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          text: '跳转',
          status: '1'
        }
      ],
      // 获取数据源
      initTableCourse: {
        // 表头
        t_head: [],
        // style
        tableStyle: {
          width: '1000px'
        },
        // 多选或者是单选
        choice: true,
        // 按键
        operation: []
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
    },
    disabled: {
      handler(newVal, old) {
        console.log(newVal, old, 'debbg')
      },
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
    },
    goPage(res) {
      console.log(res)
    },
    // 点击事件
    // cust(res) {
    //   if (this.timer) {
    //     return
    //   }
    //   this.timer = setTimeout(() => {
    //     console.log('单击事件')
    //     this.timer = null
    //     console.log(res)
    //   }, 3000)
    // }
    // 注意这里的操作结束后一定要 this.timer = null 否则不会再次执行单击函数
    // 注意这里的 5000毫秒 主要是为了测试，实际建议16毫秒即可
    searchcs(res) {
      console.log(res)
    }
  }
}
</script>

<style scoped></style>
