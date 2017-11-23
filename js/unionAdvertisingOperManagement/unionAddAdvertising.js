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
    imageUrl: '',
    form: {
      name: '',
      mId: '',
      desc: '',
      role: ''
    },
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
    value2: ''
  },
  methods: {
    clickTime() {
      let _this = this
      var time2 = new Date(Dateime).format("yyyy-MM-dd");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
  created() {

  },
  mounted:function() {
    this.isload = true
  }
})


