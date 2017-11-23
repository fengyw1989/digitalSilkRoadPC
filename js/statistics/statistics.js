/**
 * Created by admin on 2017/11/20.
 */
new Vue({
  el: '#app',
  data: {
    redegit:{number: 2300, plus: 45},
    demand:{number: 1200, plus: 8},
    service:{number: 300, plus: 8},
    activity:{number: 1610, plus: 128},
    platform:{number: 300},
    incubator:{number: 120},
    alliances:{number: 300},
    park:{number: 290},
    xAxisDara:['2016-8','2016-9','2016-10','2016-11','2016-12','2017-1','2017-2','2017-3','2017-4','2017-5','2017-7','2017-8','2017-9'],
    yAxisDara:[30, 50, 70, 30, 40, 20,30, 120, 70, 30, 40, 90,30, 50, 70, 30, 40, 20]



  },
  methods: {
    displayData(){
      let option = {
        title: {
          text: '近30天用户注册数量变化>',
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
        backgroundColor:"#fff",
        grid:{
          top: 55,
          left:30,
          bottom: 80,
          right: 30
        },
        tooltip : {
          trigger: 'axis',
          formatter:function(params){
            var html = params[0].name+"注册用户数量：<span style='color:#accde6;font-size:18px; '>"+params[0].value+"</span>个";
            return html;
          }
        },
        xAxis: {
          type : 'category',
          boundaryGap : false,
          splitLine: {
            show:true,
            interval:0,
            lineStyle: {
              color: '#e3f2fc',
              type: "solid",
              opacity:1
            }
          },
          axisTick:{show:false},
          axisLabel:{
            color:"#accde6"
          },

          axisLine:{
            lineStyle:{
              color:"#accde6"
            }
          },
          data : this.xAxisDara
        },
        yAxis: {
          name:"",
          nameTextStyle: {
            color:'#accde6',
            fontSize:12,
          },
          type : 'value',
          minInterval:20,
          splitLine: {
            show: false
          },
          axisTick:{show:false},
          axisLabel:{
            color:"#accde6"
          },
          axisLine:{
            lineStyle:{
              color:"#accde6"
            }
          },
          splitArea:{
            show:true,
            areaStyle:{
              color: ['rgba(247,252,255,.8)','#ffffff']
            }
          },
        },
        color:["#217fff"],
        series: [
          {
            name: '辅助',
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color:'#b1deff' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#feffff' // 100% 处的颜色
                  }],
                  globalCoord: true // 缺省为 false
                },
                opacity:0.8
              }
            },
            lineStyle:{
              normal:{
                color:'#49b9ff'
              }
            },
            smooth: true,
            data: this.yAxisDara
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