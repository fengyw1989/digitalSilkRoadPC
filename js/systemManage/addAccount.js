/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    defaultactive: '',
    isload: false,
    total:100,
    form: {
      name: '',
      mId: '',
      phone: '',
      role: ''
    }
  },
  methods: {
    pageJumps(ser) {
      //console.log('pageJumps')
      compageJumps(ser)
    }
  },
  created() {

  },
  mounted:function() {
    this.isload = true
  }
})

