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
      date1: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    tableData: [{
      index: '1',
      name: '九次方大数据平台',
      fbname: '九次方大数据',
      username: 'aaaa',
      fbdate: '2010-03-04',
      state: 1
    },{
      index: '2',
      name: '九次方大数据平台',
      fbname: '九次方大数据',
      username: 'aaaa',
      fbdate: '2010-03-04',
      state: 2
    },{
      index: '3',
      name: '九次方大数据平台',
      fbname: '九次方大数据',
      username: 'aaaa',
      fbdate: '2010-03-04',
      state: 3
    },{
      index: '4',
      name: '九次方大数据平台',
      fbname: '九次方大数据',
      username: 'aaaa',
      fbdate: '2010-03-04',
      state: 1
    },{
      index: '5',
      name: '九次方大数据平台',
      fbname: '九次方大数据',
      username: 'aaaa',
      fbdate: '2010-03-04',
      state: 2
    },{
      index: '6',
      name: '九次方大数据平台',
      fbname: '九次方大数据',
      username: 'aaaa',
      fbdate: '2010-03-04',
      state: 3
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
    toDetail(state) {
      console.log(state)
      //console.log(window.parent)
        window.parent.setSrc("./auditsManagement/incubatorDetailUnAudits.html?state="+state)
    }
  },
  created() {

  },
  mounted() {

  }
})

