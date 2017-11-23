/**
 * Created by admin on 2017/11/15.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {


  },
  methods: {
    GetQueryString(name) {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    },
    fbfun(id){
      let _this =this
      this.$confirm('确认发布？')
        .then(_ => {
          _this.done(id);
        })
        .catch(_ => {});
    },
    done(id){
      console.log(id)
    }
  },
  created() {


  },
  mounted() {

  }
})

