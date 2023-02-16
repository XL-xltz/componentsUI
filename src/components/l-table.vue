<template>
  <div>
    <div>
      <slot name="hater"></slot>
    </div>
    <el-table
      @cell-dblclick="rowClick($event)"
      :data="ltableData"
      :style="'width:' + ltable + '%'"
      border
      v-bind="$attrs"
    >
      <!-- index -->
      <el-table-column type="index"></el-table-column>
      <!-- 数据 -->
      <el-table-column
        v-for="(item, index) in lcolumns"
        :key="item.key"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
      <!-- 操作 -->
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope, 1)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="handleClick(scope, 2)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="pag.total" @current-change="handleCurrentChange">
    </el-pagination>

    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table',
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
    },
    // 表头
    lcolumns: {
      type: Array,
      default: () => []
    },
    // 数据源
    ltableData: {
      type: Array,
      default: () => []
    },
    // table 宽度
    ltable: {
      type: String,
      default: '700'
    }
  },
  data() {
    return {
      rowId: ''
    }
  },
  computed: {},
  filters: {},
  watch: {},
  created() {
    console.log(this.$attrs, '123')
  },
  methods: {
    handleClick(res, key) {
      // console.log(res, key)
      // s获取 index 当前行
      const { $index, row } = res
      //   传值
      // this.$emit('seeClick', { $index, row })

      if (key == 1) {
        this.$emit('seeClick', $index)
      } else {
        this.$emit('seeClick', row)
      }
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.$emit('nextList', val)
    },
    rowClick(res) {
      console.log(res.address)
      const add = res.address
      if (add !== '') {
        console.log(true)
        console.log(res)
        this.rowId = res.id
      } else {
        console.log(false)
      }
      //
    }
  }
}
</script>

<style lang="scss" scoped></style>
