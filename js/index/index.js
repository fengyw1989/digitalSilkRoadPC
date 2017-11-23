/**
 * Created by admin on 2017/11/15.
 */
addMenuLeftEventListener();
function addMenuLeftEventListener(){
  var menuArr = document.getElementsByClassName('menu-item');
  for(var i=0;i<menuArr.length;i++){
    menuArr[i].addEventListener('click',function (event) {
      selectMenu(menuArr,event.target);
    });
  }
  var keyItem = getSession('keyItem');
  var liEle = null;
  var liEleList = document.getElementsByClassName('menu-left')[0].getElementsByTagName('li');
  if(keyItem){
      for(var j=0;j<liEleList.length;j++){
          if(keyItem!=liEleList[j].lastElementChild.innerText) continue;
          liEle = liEleList[j];
          break;
      }
  }else{
      liEle = liEleList[0];
  }
  liEle.parentNode.parentNode.setAttribute('class','menu-item menu-active');
  liEle.setAttribute('class','item-active');
  goPage(liEle.getAttribute('chref'));
}

function selectMenu(menuArr,ele) {
  var nodeName = ele.nodeName.toLocaleLowerCase();
  if(nodeName=='a'){
    if(ele.parentNode.getAttribute('class')&&ele.parentNode.getAttribute('class').indexOf('active')!=-1) return;
    var liArr = ele.parentNode.parentNode.parentNode.parentNode.getElementsByTagName('li');
    for(var i=0;i<liArr.length;i++){
      liArr[i].setAttribute('class','');
      if(liArr[i]==ele.parentNode){
        setSession('keyItem',liArr[i].lastElementChild.innerText);
      }
    }
    ele.parentNode.setAttribute('class','item-active');
    goPage(ele.parentNode.getAttribute('chref'));
    return;
  }else if(nodeName=='li'){
    if(ele.getAttribute('class')&&ele.getAttribute('class').indexOf('active')!=-1) return;
    var liArr = ele.parentNode.parentNode.getElementsByTagName('li');
    for(var i=0;i<liArr.length;i++){
      liArr[i].setAttribute('class','');
      if(liArr[i]==ele){
        setSession('keyItem',ele.lastElementChild.innerText);
      }
    }
    ele.setAttribute('class','item-active');
    goPage(ele.getAttribute('chref'));
    return;
  }
  while(ele.getAttribute('class').indexOf('menu-item')==-1){
    ele = ele.parentNode;
  }
  if(ele.getAttribute('class').indexOf('active')!=-1) return;
  for(var i=0;i<menuArr.length;i++){
    menuArr[i].setAttribute('class','menu-item');
  }
  ele.setAttribute('class','menu-item menu-active');
}
function goPage(url) {
  if(!url) return;
  document.getElementById('iframeId').src = url;
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

function saveUser(user){
  setSession('USERINFO',user)
}

function getUser(){
  getSession('USERINFO');
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

function setIframeHeight(iframe) {
  var iframe = iframe || document.getElementById('iframeId')
  if (iframe) {
    var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
    if (iframeWin.document.body) {
      iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
    }
  }
};

window.onload = function () {
  setIframeHeight();
};
var int=window.setInterval("setIframeHeight()",500)

function setSrc(src){
  console.log(document.getElementById("iframeId"))
  document.getElementById("iframeId").src = src
}
