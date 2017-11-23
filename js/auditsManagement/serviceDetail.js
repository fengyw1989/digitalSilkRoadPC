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
      opt: true,
      btnname1: "",
      btnclass1: "pass",
      btnname2: "",
      btnclass2: "nopass"
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
        this.state.name = '未审核'
        this.state.class = 'state1'
        this.state.opt = true
        this.state.btnname1 = "审核通过"
        this.state.btnclass1 = "pass"
        this.state.btnname2 = "不通过"
        this.state.btnclass2 = "nopass"
        break
      case 2:
        this.state.name = '审核未通过'
        this.state.class = 'state2'
        this.state.opt = true
        this.state.btnname1 = "审核通过"
        this.state.btnclass1 = "pass"
        this.state.btnname2 = "不通过"
        this.state.btnclass2 = "nopass"
        break
      case 3:
        this.state.name = '已通过'
        this.state.class = 'state3'
        this.state.opt = true
        this.state.btnname1 = "强制失效"
        this.state.btnclass1 = "pass"
        this.state.btnname2 = "设置优选"
        this.state.btnclass2 = "nopass"
        break
      case 4:
        this.state.name = '已失效'
        this.state.class = 'state4'
        this.state.opt = false
        break
    }
    //console.log(this.stateName)
    //console.log(typeof this.state)
  },
  mounted() {

  }
})

