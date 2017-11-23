/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    total:100,
    form: {
      demand: '',
      service: '',
      activity: ''
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
  }
})

