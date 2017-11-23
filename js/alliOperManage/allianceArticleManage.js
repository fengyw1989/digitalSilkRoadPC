/**
 * Created by admin on 2017/11/15.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    total:100,
    form: {
      key: '',
      state: '',
      yqtype: '',
      date1: ''
    },
    tableData: [{
      arttitle:'关于我们',
      artlm:'联盟和您',
      updater:'张三',
      updateD:'2018-10-10'
    },{
      arttitle:'关于我们',
      artlm:'联盟和您',
      updater:'张三',
      updateD:'2018-10-10'
    },{
      arttitle:'关于我们',
      artlm:'联盟和您',
      updater:'张三',
      updateD:'2018-10-10'
    },{
      arttitle:'关于我们',
      artlm:'联盟和您',
      updater:'张三',
      updateD:'2018-10-10'
    },{
      arttitle:'关于我们',
      artlm:'联盟和您',
      updater:'张三',
      updateD:'2018-10-10'
    },{
      arttitle:'关于我们',
      artlm:'联盟和您',
      updater:'张三',
      updateD:'2018-10-10'
    },{
      arttitle:'关于我们',
      artlm:'联盟和您',
      updater:'张三',
      updateD:'2018-10-10'
    }
    ],
    currentPage:3
  },
  methods: {
    pageJumps(ser) {
      //console.log('pageJumps')
      compageJumps(ser)
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    deleteArticle(scope){
      let _this =this
      this.$confirm('确认关闭？')
        .then(_ => {
          _this.done(scope);
        })
        .catch(_ => {});
    },
    done(scope){
      console.log(scope)
    }
  },
  created() {

  },
  mounted() {

  }
})

