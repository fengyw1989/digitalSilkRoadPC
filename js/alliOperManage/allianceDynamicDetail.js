/**
 * Created by admin on 2017/11/15.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    state:{
      value: 1,
      name: '',
      class: '',
      opt1: true,
      opt2: true,
      opt3: true,
      btnname1: "",
      btnclass1: "pass",
      btnname2: "",
      btnclass2: "nopass",
      btnname3: ""
    }

  },
  methods: {
    GetQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    }
  },
  created() {
    this.state.value = parseInt(this.GetQueryString("state"))
    switch (this.state.value){
      case 1:
        this.state.name = '未发布'
        this.state.class = 'state1'
        this.state.opt1 = true
        this.state.opt2 = true
        this.state.opt3 = true
        this.state.btnname1 = "发布"
        this.state.btnname2 = "修改"
        this.state.btnname3 = "删除"
        break
      case 2:
        this.state.name = '已发布'
        this.state.class = 'state3'
        this.state.opt1 = true
        this.state.opt2 = false
        this.state.opt3 = false
        this.state.btnname1 = "撤回"
        break
      case 3:
        this.state.name = '已撤回'
        this.state.class = 'state4'
        this.state.opt1 = true
        this.state.opt2 = true
        this.state.opt3 = true
        this.state.btnname1 = "重新发布"
        this.state.btnname2 = "修改"
        this.state.btnname3 = "删除"
        break
    }
    //console.log(this.stateName)
    //console.log(typeof this.state)
  },
  mounted() {

  }
})

