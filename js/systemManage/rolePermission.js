/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    defaultactive: '',
    isload: false,
    input5: '',
    total:100,
    tableData: [{
      order: '01',
      orleName: '超级管理员',
      config: '系统管理',
    },
      {
        order: '02',
        orleName: '超级管理员',
        config: '系统管理',
      },
      {
        order: '03',
        orleName: '超级管理员',
        config: '系统管理',
      },
      {
        order: '04',
        orleName: '超级管理员',
        config: '系统管理',
      }],
    currentPage:1
  },
  methods: {
    pageJumps(ser) {
      //console.log('pageJumps')
      compageJumps(ser)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
  },
  mounted:function() {
    this.isload = true
  }
})

