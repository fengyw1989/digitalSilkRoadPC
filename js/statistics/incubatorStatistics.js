/**
 * Created by admin on 2017/11/20.
 */
new Vue({
  el: '#app',
  data: {
    incubator:{number: 120},
    xAxisDara:['2016-8','2016-9','2016-10','2016-11','2016-12','2017-1','2017-2','2017-3','2017-4','2017-5','2017-7','2017-8','2017-9','2017-10','2017-11'],
    yAxisDara:[30, 50, 70, 30, 40, 20,30, 50, 70, 30, 40, 90,30,40,500]

  },
  methods: {
    displayData(){
      let option = {
        title: {
          text: '示范孵化器统计',
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
              color:"#accde6"
            },
            axisLine:{
              lineStyle:{
                color:'#08376a'
              },
              show:true
            },
            splitLine:{
              lineStyle:{
                color:'#08376a'
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
                color:'#08376a'
              },
              show:true
            },
            splitLine:{
              lineStyle:{
                color:'#accde6'
              },
              show:false
            },
            splitArea:{
              show:true,
              areaStyle:{
                color: ['rgba(247,252,255,.8)','#ffffff']
              }
            },
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
                  offset: 0, color: 'rgba(223, 185, 71, 1)'
                }, {
                  offset: 1, color: 'rgba(204, 153, 0, 1)'
                }]),
                borderWidth: 0,
                borderType: 'solid',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: 'rgba(223, 185, 71, 1)'
                }, {
                  offset: 1, color: 'rgba(204, 153, 0, 1)'
                }])
              }
            },
            lineStyle:{
              normal:{
                color:'#49b9ff'
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