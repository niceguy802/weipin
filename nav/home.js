// 商品分类隐藏下拉框
var nav_pro = document.getElementById("nav_pro");
var t_n_hidden = document.getElementById("t_n_hidden");

nav_pro.onmouseover = function () {
  t_n_hidden.style.display = 'block';
  
  // t_n_hidden.style.transform = 'all 0.6s';


}
nav_pro.onmouseout = function () {
  t_n_hidden.style.display = 'none';
}
t_n_hidden.onmouseover = function () {
  t_n_hidden.style.display = 'block';
}
t_n_hidden.onmouseout = function () {
  t_n_hidden.style.display = 'none';}

// 回到顶部
var back_to_top = document.getElementById("back_to_top");

back_to_top.onclick = function () {
  location = "#top";
  console.log(2333);
}
function backTop() {
  location = "#top";
}

// 更多
var nav_bottom_more = document.getElementById("nav_bottom_more");
var n_b_more = document.getElementById("n_b_more");

n_b_more.onmouseover = function () {
  n_b_more.style.boxShadow = "0 -5px 3px #ccc";
  nav_bottom_more.style.display = "block";
}
n_b_more.onmouseout = function () {
  n_b_more.style.boxShadow = "0 0 0 white";
  nav_bottom_more.style.display = "none";
}
nav_bottom_more.onmouseover = function () {
  n_b_more.style.boxShadow = "0 -5px 3px #ccc";
  nav_bottom_more.style.display = "block";
}
nav_bottom_more.onmouseout = function () {
  n_b_more.style.boxShadow = "0 0 0 white";
  nav_bottom_more.style.display = "none";
}


var login_topNav = getEBID('login_topNav');
login_topNav.onclick = function(){
  self.location.href = "../loginRegist/login.html";
}

function getEBID(idValue) {
  return document.getElementById(idValue);
}

function getEBClass(classValue) {
  return document.getElementsByClassName(classValue);
}



