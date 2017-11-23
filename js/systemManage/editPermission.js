/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    form:{
      roleName:''
    },
    data2: [{
      id: 1,
      label: '系统管理',
      children: [{
        id: 4,
        label: '用户管理'
      },
        {
          id: 5,
          label: '角色权限'
        },
        {
          id: 6,
          label: '数据字典'
        },
        {
          id: 7,
          label: '功能菜单'
        },
        {
          id: 8,
          label: '系统日志'
        }
      ]
    }, {
      id: 2,
      label: '审核管理',
      children: [
        {
          id: 9,
          label: '注册信息审核'
        },
        {
          id: 10,
          label: '发布信息审核'
        },
        {
          id: 11,
          label: '申请审核',
          children: [
            {
              id: 15,
              label: '一带一路联盟入盟申请'
            },
            {
              id: 16,
              label: '示范平台接入审核'
            },
            {
              id: 17,
              label: '示范园区申请审核'
            },
            {
              id: 18,
              label: '示范孵化器申请审核'
            },
            {
              id: 19,
              label: '示范联盟申请审核'
            }
          ]
        }
      ]
    }, {
      id: 3,
      label: '运营管理',
      children: [
        {
          id: 12,
          label: '注册用户管理'
        },
        {
          id: 13,
          label: '内容管理',
          children: [
            {
              id: 20,
              label: '行业动态'
            },
            {
              id: 21,
              label: '活动'
            },
            {
              id: 22,
              label: '咨询'
            },
            {
              id: 23,
              label: '联盟信息'
            }
          ]
        },
        {
          id: 14,
          label: '广告管理',
          children: [
            {
              id: 24,
              label: '广告位管理'
            }]
        }
      ]
    }],
    defaultProps: {
      children: 'children',
      label: 'label'
    }
  },
  methods: {
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    }
  },
  created() {
  },
  mounted:function() {
    this.setCheckedKeys()
    this.isload = true
  }
})

