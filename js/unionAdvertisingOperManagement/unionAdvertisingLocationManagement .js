/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    pickerOptions0: {
      disabledDate(time) {
        return time.getTime() > Date.now();
      }
    },
    pickerOptions1: {
      shortcuts: [{
        text: '今天',
        onClick(picker) {
          picker.$emit('pick', new Date());
        }
      }, {
        text: '昨天',
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          picker.$emit('pick', date);
        }
      }, {
        text: '一周前',
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', date);
        }
      }]
    },
    value1: '',
    value2: '',
    defaultactive: '',
    rePasswrod:123456,
    isload: false,
    dialogVisible: false,
    total:100,
    form: {
      keyword: '',
      account: '',
      time: '',
      type:''
    },
    tableData: [{
      order:1,
      title: '海外投资机会',
      type: '展览',
      address: '北京市海淀区',
      content:'图片',
      date: '2010*218',
      state: 1
    },
      {
        order:2,
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        content:'图片',
        date: '2010*218',
        state: 1
      },
      {
        order:3,
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        content:'图片',
        date: '2010*218',
        state: 1
      },
      {
        order:4,
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        content:'图片',
        date: '2010*218',
        state: 2
      },
      {
        order:5,
        title: '海外投资机会',
        type: '展览',
        address: '北京市海淀区',
        content:'图片',
        date: '2010*218',
        state: 1
      }
    ],
    currentPage:3
  },
  methods: {
    toDetail(state) {
      console.log(state)
      //console.log(window.parent)
      window.parent.setSrc("./advertisingOperManagement/advertisingSet.html?state="+state)
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

