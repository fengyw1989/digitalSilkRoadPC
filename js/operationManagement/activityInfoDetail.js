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
            opt: true
        }

    },
    methods: {
        deleteFn(done) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
            });
        },
        GetQueryString(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
    },
    created() {
        this.state.value = parseInt(this.GetQueryString("state"))
        //console.log(this.stateName)
        //console.log(typeof this.state)

    },
    mounted() {

    }
})

/**
 * Created by 79326 on 2017/11/19.
 */
