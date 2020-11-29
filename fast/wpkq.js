window.onscroll = function () {
  var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var nav_info = document.getElementById('nav_info');
  var mdcolor = document.getElementsByClassName("mdcolor");
  if (top > 700) {//500就是滚动条滚动到的位置，大于500(500指500px)才显示
    nav_info.style.display = 'block';
    if (top >= 800 && top <= 1600) {
      mdcolor[0].style.background = "#f10180";
      changmdColor(1);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 1800 && top <= 2500) {
      mdcolor[1].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 2700 && top <= 3500) {
      mdcolor[2].style.background = "#f10180";
      changmdColor(0);
      changmdColor(1);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 3600 && top <= 4400) {
      mdcolor[3].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(1);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 4500 && top <= 5300) {
      mdcolor[4].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(1);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 5400 && top <= 6200) {
      mdcolor[5].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(1);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 6300 && top <= 7800) {
      mdcolor[6].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(1);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 7900 && top <= 8700) {
      mdcolor[7].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(1);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 8800 && top <= 9600) {
      mdcolor[8].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(1);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 9700 && top <= 10500) {
      mdcolor[9].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(1);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 10600 && top <= 11400) {
      mdcolor[10].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(1);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 11500 && top <= 12300) {
      mdcolor[11].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(1);
      changmdColor(12);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 12400 && top <= 13200) {
      mdcolor[12].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(1);
      changmdColor(13);
      changmdColor(14);
    }
    else if (top >= 13300 && top <= 14100) {
      mdcolor[13].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(1);
      changmdColor(14);
    }
    else if (top >= 12300 && top <= 13100) {
      mdcolor[14].style.background = "#f10180";
      changmdColor(0);
      changmdColor(2);
      changmdColor(3);
      changmdColor(4);
      changmdColor(5);
      changmdColor(6);
      changmdColor(7);
      changmdColor(8);
      changmdColor(9);
      changmdColor(10);
      changmdColor(11);
      changmdColor(12);
      changmdColor(13);
      changmdColor(1);
    }
  } else {
    nav_info.style.display = 'none';
  }
  function changmdColor(i) {
    return mdcolor[i].style.background = "";
  }
}
// 锚点显示
var anhour_hidden_box = document.getElementById("anhour_hidden_box");
var nav_info = document.getElementById("nav_info");

anhour_hidden_box.onmouseover = function () {
  nav_info.style.left = "0px";
}

nav_info.onmouseover = function () {
  nav_info.style.left = "0px";
  anhour_hidden_box.style.display = "none";
}

nav_info.onmouseout = function () {
  nav_info.style.left = "-90px";
  anhour_hidden_box.style.display = "block";
}
