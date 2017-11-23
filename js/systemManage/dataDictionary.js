/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    dialogVisible1:false,
    dialogVisible2:false,
    total:100,
    formLabelWidth: '60px',
    form: {
      order: '',
      value: '',
      desc:''
    },
    tableData: [{
      order: '01',
      dValue: '经贸服务',
      state: '未启用',
      desc: 'XXX'
    },
      {
        order: '02',
        dValue: '经贸服务',
        state: '未启用',
        desc: 'XXX'
      },
      {
        order: '03',
        dValue: '经贸服务',
        state: '未启用',
        desc: 'XXX'
      },
      {
        order: '04',
        dValue: '经贸服务',
        state: '未启用',
        desc: 'XXX'
      }],
    currentPage:1
  },
  methods: {
    editDictionary() {
      this.dialogVisible1 = true
    },
    checkDictionary() {
      this.dialogVisible2 = true
    },
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

