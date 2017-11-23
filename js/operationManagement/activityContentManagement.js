/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    defaultactive: '',
    rePasswrod:123456,
    isload: false,
    dialogVisible: false,
    total:100,
    form: {
      name: '',
      account: '',
      time: '',
      type:''
    },
    tableData: [{
      title: '海外投资机会',
      type: '展览',
      address: '北京市海淀区',
      date: '2010-03-04',
      state: 1
    },
      {
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        date: '2010-03-04',
        state: 3
      },
      {
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        date: '2010-03-04',
        state: 1
      },
      {
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        date: '2010-03-04',
        state: 2
      },
      {
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        date: '2010-03-04',
        state: 3
      }
    ],
    currentPage:3
  },
  methods: {
    toDetail(state) {
      console.log(state)
      //console.log(window.parent)
      window.parent.setSrc("./operationManagement/activityInfoDetail.html?state="+state)
    },
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
    resetPassword() {
      this.dialogVisible = true
    }
  },
  created() {

  },
  mounted:function() {
    this.isload = true
  }
})

