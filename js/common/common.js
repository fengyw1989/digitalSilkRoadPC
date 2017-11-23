// 日期格式处理
Date.prototype.format = function(fmt) {
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt)) {
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}

// 表单序列化函数
function queryString(obj) {
  if (obj == null) return ''
  let keys = Object.keys(obj)
  return keys.map(key => {
    let value = obj[key]
    value == null && (value = '')
    return `${key}=${value}`
  }).join('&')
}

//sessionStorage保存
function setSession(name, obj) {
  let msg = obj;
  let str = JSON.stringify(msg);
  sessionStorage.setItem(name, str);
}

//sessionStorage读取
function getSession(name) {
  return JSON.parse(sessionStorage.getItem(name))
}

//sessionStorage追加
function pushSession(name, obj) {
  let msg = getSession(name);
  if (!msg) {
    msg = {}
  }
  for (let key in obj) {
    msg[key] = obj[key];
  }
  console.log(msg)
  setSession(name, msg);
}

//得到事件
function getEvent() {
  if (window.event) {
    return window.event;
  }
  var func = getEvent.caller;
  while (func != null) {
    var arg0 = func.arguments[0];
    if (arg0) {
      if ((arg0.constructor == Event || arg0.constructor == MouseEvent
        || arg0.constructor == KeyboardEvent)
        || (typeof (arg0) == "object" && arg0.preventDefault
        && arg0.stopPropagation)) {
        return arg0;
      }
    }
    func = func.caller;
  }
  return null;
}
//阻止冒泡
function cancelBubble() {
  var e = getEvent();
  if (window.event) {
    //e.returnValue=false;//阻止自身行为
    e.cancelBubble = true;//阻止冒泡
  } else if (e.preventDefault) {
    //e.preventDefault();//阻止自身行为
    e.stopPropagation();//阻止冒泡
  }
}

//时间转化精确到分钟
function getDate(time) {
  let oDate = new Date(time);
  return '' + oDate.getFullYear() + '-' + toTen(oDate.getMonth() + 1) + '-' + toTen(oDate.getDate()) + ' ' + toTen(oDate.getHours()) + ':' + toTen(oDate.getMinutes());
  function toTen(number) {
    return parseInt(number) < 10 ? '0' + number : '' + number;
  }
}
//时间转化精确到天
function getDateByDay(time) {
  let oDate = new Date(time);
  return '' + oDate.getFullYear() + '-' + toTen(oDate.getMonth() + 1) + '-' + toTen(oDate.getDate());
  function toTen(number) {
    return parseInt(number) < 10 ? '0' + number : '' + number;
  }
}

function compageJumps(ser){
  pushSession('page', {index: ser})
}

