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
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    tableData: [{
      id: 'admin1',
      js: '超级管理员',
      name: '王小虎',
      phone: '123445333',
      date: '2010-03-04',
      state: '王小虎'
    },
      {
        id: 'admin2',
        js: '超级管理员',
        name: '王小虎',
        phone: '123445333',
        date: '2010-03-04',
        state: '王小虎'
      },
      {
        id: 'admin3',
        js: '超级管理员',
        name: '王小虎',
        phone: '123445333',
        date: '2010-03-04',
        state: '王小虎'
      },
      {
        id: 'admin4',
        js: '超级管理员',
        name: '王小虎',
        phone: '123445333',
        date: '2010-03-04',
        state: '王小虎'
      },
      {
        id: 'admin5',
        js: '超级管理员',
        name: '王小虎',
        phone: '123445333',
        date: '2010-03-04',
        state: '王小虎'
      }
    ],
    currentPage:3
  },
  methods: {
    addcount() {
  window.parent.document.querySelector('.modal').style.display = 'block'

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

