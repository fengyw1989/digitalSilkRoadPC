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
      menuId1: '',
      menuId2: '',
      imgsrc: '',
      content: ''
    }
  },
  methods: {
    pageJumps(ser) {
      //console.log('pageJumps')
      compageJumps(ser)
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

