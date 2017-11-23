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
      id: '1',
      title: '海外投资机会研究',
      lanmu: '联盟咨询',
      fbname: '王一',
      fbdate: '2010-03-04',
      state: 1,
      statename: '未发布'
    },{
      id: '2',
      title: '海外投资机会研究',
      lanmu: '联盟咨询',
      fbname: '王一',
      fbdate: '2010-03-04',
      state: 2,
      statename: '已发布'
    },{
      id: '3',
      title: '海外投资机会研究',
      lanmu: '联盟咨询',
      fbname: '王一',
      fbdate: '2010-03-04',
      state: 3,
      statename: '已撤回'
    },{
      id: '4',
      title: '海外投资机会研究',
      lanmu: '联盟咨询',
      fbname: '王一',
      fbdate: '2010-03-04',
      state: 1,
      statename: '未发布'
    },{
      id: '5',
      title: '海外投资机会研究',
      lanmu: '联盟咨询',
      fbname: '王一',
      fbdate: '2010-03-04',
      state: 2,
      statename: '已发布'
    },{
      id: '6',
      title: '海外投资机会研究',
      lanmu: '联盟咨询',
      fbname: '王一',
      fbdate: '2010-03-04',
      state: 3,
      statename: '已撤回'
    },
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
        window.parent.setSrc("./alliOperManage/allianceDynamicDetail.html?state="+state)
    }
  },
  created() {

  },
  mounted() {

  }
})

