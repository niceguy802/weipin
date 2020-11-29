// 回到顶部
var back_to_top = document.getElementById("back_to_top");

back_to_top.onclick = function () {
  location = "#top";
  console.log(2333);
}
function backTop() {
  location = "#top";
}

// 轮播图
var index = 0;
function changeImg() {
  index++;
  var a = document.getElementsByClassName("car_img");
  var b = document.getElementsByClassName("car_img_text");

  if (index > a.length - 1) index = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      b[j].style.borderBottom = "";
    }
    a[i].style.display = "none";
    b[index].style.borderBottom = "2px solid #e6057d";
    a[i].index = i;

  }
  a[index].style.display = 'block';
}
var timer = setInterval(changeImg, 3000);

// 鼠标悬停清除定时
var car_img = document.getElementById("car_img");
car_img.onmouseover = function () {
  clearInterval(timer);
}
car_img.onmouseout = function () {
  // changeImg();
  timer = setInterval(changeImg, 3000);
}

// 锚点
window.onscroll = function () {
  var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var anhour = document.getElementById('anhour');
  var mdcolor = document.getElementsByClassName("mdcolor");
  if (top > 1500) {//500就是滚动条滚动到的位置，大于500(500指500px)才显示
    anhour.style.display = 'block';

    for (var i = 0; i < mdcolor.length; i++) {
      if (top >= 1500 && top <= 2170) {
        mdcolor[0].style.background = "#f10180";
        changmdColor(1);
        changmdColor(2);
        changmdColor(3);
        changmdColor(4);
        changmdColor(5);
        changmdColor(6);

      }
      else if (top >= 2180 && top <= 2500) {
        mdcolor[1].style.background = "#f10180";
        changmdColor(0);
        changmdColor(2);
        changmdColor(3);
        changmdColor(4);
        changmdColor(5);
        changmdColor(6);
      }
      else if (top >= 2813 && top <= 3470) {
        mdcolor[2].style.background = "#f10180";
        changmdColor(0);
        changmdColor(1);
        changmdColor(3);
        changmdColor(4);
        changmdColor(5);
        changmdColor(6);
      }
      else if (top >= 3480 && top <= 4130) {
        mdcolor[3].style.background = "#f10180";
        changmdColor(0);
        changmdColor(2);
        changmdColor(1);
        changmdColor(4);
        changmdColor(5);
        changmdColor(6);
      }
      else if (top >= 4140 && top <= 4700) {
        mdcolor[4].style.background = "#f10180";
        changmdColor(0);
        changmdColor(2);
        changmdColor(3);
        changmdColor(1);
        changmdColor(5);
        changmdColor(6);
      }
      else if (top >= 4800 && top <= 5450) {
        mdcolor[5].style.background = "#f10180";
        changmdColor(0);
        changmdColor(2);
        changmdColor(3);
        changmdColor(4);
        changmdColor(1);
        changmdColor(6);
      }
      else if (top >= 5460 && top <= 6120) {
        mdcolor[6].style.background = "#f10180";
        changmdColor(0);
        changmdColor(2);
        changmdColor(3);
        changmdColor(4);
        changmdColor(1);
        changmdColor(5);
      }

    }
  } else {
    anhour.style.display = 'none';
  }
  function changmdColor(i) {
    return mdcolor[i].style.background = "";
  }
}

// 锚点显示
var anhour_hidden_box = document.getElementById("anhour_hidden_box");
var anhour = document.getElementById("anhour");

anhour_hidden_box.onmouseover = function () {
  anhour.style.left = "0px";
}

anhour.onmouseover = function () {
  anhour.style.left = "0px";
  anhour_hidden_box.style.display = "none";
}

anhour.onmouseout = function () {
  anhour.style.left = "-85px";
  anhour_hidden_box.style.display = "block";
}

// 点击收藏
var new_like = document.getElementsByClassName("new_like");
for (let i = 0; i < new_like.length; i++) {
  new_like[i].onclick = function () {
    if (new_like[i].children[0].style.display != "none") {
      new_like[i].children[0].style.display = "none";
      new_like[i].children[1].style.display = "inline-block";
    } else {
      new_like[i].children[0].style.display = "inline-block";
      new_like[i].children[1].style.display = "none";
    }


  }
}



// 倒计时
var clock1 = document.getElementById("clock1");
var clock2 = document.getElementById("clock2");
var clock3 = document.getElementById("clock3");
var cont_clock = function
  () {
  // 获取当前时间
  var nowtime = new Date();
  var endtime = new Date("2020/9/5 00:00:00");
  // 获取剩余时间
  var left = endtime.getTime() - nowtime.getTime();
  var dd = Math.floor(left / (1000 * 60 * 60 * 24)),
    hh = Math.floor(left / (1000 * 60 * 60) % 24),
    mm = Math.floor(left / (1000 * 60) % 60),
    ss = Math.floor(left / 1000 % 60);
  if (left > 0) {
    clock1.innerHTML = hh;
    clock2.innerHTML = mm;
    clock3.innerHTML = ss;
  } else {
    clock1.innerHTML = 00;
    clock2.innerHTML = 00;
    clock3.innerHTML = 00;
    cleanInterval(time);
  }

}
var time = setInterval(cont_clock, 1000);

// 图片旋转
var must_ib2 = document.getElementsByClassName("must_ib2");
function tranformImg() {
  for (var i = 0; i < must_ib2.length; i++) {
    must_ib2[i].lastElementChild.style.transform = "rotateY(-360deg)";
  }
}

setInterval(tranformImg, 5000);


// 轮播图按钮切换

