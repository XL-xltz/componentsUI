<template>
  <div>
    <tables :table_config="source_config" />
    <ATable :table_config="source_config" />
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
        // 多选或者是单选
        choice: true,
        // 表头
        t_head: [
          { prop: 'date', label: '日期' },
          { prop: 'name', label: '姓名' },
          {
            prop: 'switch',
            label: '开关',
            type: 'switch_fn',
            callback: () => {
              return 1
            }
          },
          { prop: 'address', label: '地址' },
          { prop: 'avatarUrl', label: '头像', type: 'avatar' },
          { prop: 'JumpPage', label: '头像', type: 'JumpPage' },
          { prop: 'button', label: '常规操作', type: 'btn' },
          { prop: 'customAction', label: '自定义按钮', type: 'customAction_btn' }
        ],
        tableStyle: {
          width: '1000px'
        },
        // 普通按钮操作
        operation: [
          { type: 'danger', label: '删除', color: '#fff', isShow: true },
          { type: 'primary', label: '编辑', color: 'skyblue', isShow: false }
        ]
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
