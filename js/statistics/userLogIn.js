/**
 * Created by admin on 2017/11/20.
 */
new Vue({
  el: '#app',
  data: {
    redegit:{number: 2300, plus: 45},
    xAxisDara:['2016-8','2016-9','2016-10','2016-11','2016-12','2017-1','2017-2','2017-3','2017-4','2017-5','2017-7','2017-8','2017-9'],
    yAxisDara:[30, 50, 70, 30, 40, 20,30, 120, 70, 30, 40, 90,30, 50, 70, 30, 40, 20]

  },
  methods: {
    displayData(){
      let option = {
        title: {
          text: '用户注册数',
          x: 'center',                 // 水平安放位置，默认为左对齐，可选为：// 'center' ¦ 'left' ¦ 'right'// ¦ {number}（x坐标，单位px）
          y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                     // 'top' ¦ 'bottom' ¦ 'center'
                                     // ¦ {number}（y坐标，单位px）
          //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#444',       // 标题边框颜色
          borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
          padding: 5,                // 标题内边距，单位px，默认各方向内边距为5，
                                     // 接受数组分别设定上右下左边距，同css
          itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，
          textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#444'          // 主标题文字颜色
          },
          subtextStyle: {
            color: '#444'          // 副标题文字颜色
          }
        },
        tooltip : {
          trigger: 'axis',
          borderColor: '#fff',
          borderWidth:1,
          backgroundColor:'#fff',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params){
            //console.log(params);
            return '<span style="color:#0f9eaa;">'+ params[0].value +'</span>'
          },
          padding:10
        },
        legend: {

        },
        backgroundColor:"#fff",
        grid: {
          top: 55,
          left:30,
          bottom: 80,
          right: 30
        },
        xAxis : [
          {
            type : 'category',
            data : this.xAxisDara,
            axisTick: {
              alignWithLabel: true,
              show:false
            },
            axisLabel:{
              margin:10,
              textStyle:{
                color:'#08376a',
                fontSize:14
              },
              //rotate:45
            },
            axisLine:{
              lineStyle:{
                color:'#accde6',
                /*width:2,
                opacity :0.5*/
              },
              show:true
            },
            splitLine:{
              lineStyle:{
                color:'#accde6'
              },
              show:false
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisTick: {
              alignWithLabel: true,
              show:false
            },
            axisLabel:{
              textStyle:{
                color:'#08376a'
              },
              show:true
            },
            axisLine:{
              lineStyle:{
                color:'rgba(47,47,66,0.5)',
                width:2,
                opacity :0.5
              },
              show:true
            },
            splitLine:{
              lineStyle:{
                color:'#accde6'
              },
              show:false
            }
          }
        ],
        series : [
          {
            name:' ',
            type:'bar',
            barWidth:'30%',
            itemStyle: {
              normal: {
                borderColor:  new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                  offset: 0, color: '#1b80dc'
                }, {
                  offset: 1, color: '#00bee9'
                }]),
                borderWidth: 2,
                borderType: 'solid',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: '#00bee9'
                }, {
                  offset: 1, color: '#1c81dc'
                }])
              }
            },
            data: this.yAxisDara,
          }
        ]

      }
      let myChart1 = echarts.init(document.getElementById('echarts1'));
      myChart1.setOption(option);
      //console.log(myChart1);
    }
  },
  created() {
  },
  mounted() {
    this.displayData()
  }
})