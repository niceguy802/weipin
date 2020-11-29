
	
// 锚点滚动条
window.onscroll = function () {
	var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	var anhour = document.getElementById('anhour');
	var anhour_typeName = getEBClass('anhour_typeName');
	if (top > 1100 && top < 2100) {//500就是滚动条滚动到的位置，大于500(500指500px)才显示
		anhour.style.display = 'block';
		anhour_typeName[0].style.cssText = 'background-color:#f10180; color:#fff';
		anhourColor(1);
		anhourColor(2);
		anhourColor(3);
		anhourColor(4);

	} else if (top > 2101 && top < 3100) {
		anhour.style.display = 'block';
		anhourColor(0);
		anhour_typeName[1].style.cssText = 'background-color:#f10180; color:#fff';
		anhourColor(2);
		anhourColor(3);
		anhourColor(4);
		// anhour.style.display = 'none';
	} else if (top > 3101 && top < 4100) {
		anhour.style.display = 'block';
		anhourColor(0);
		anhourColor(1);
		anhour_typeName[2].style.cssText = 'background-color:#f10180; color:#fff';
		anhourColor(3);
		anhourColor(4);
	} else if (top > 4101 && top < 5100) {
		anhour.style.display = 'block';
		anhourColor(0);
		anhourColor(1);
		anhourColor(2);
		anhour_typeName[3].style.cssText = 'background-color:#f10180; color:#fff';
		anhourColor(4);

	} else if (top > 5101 && top < 6100) {
		anhour.style.display = 'block';
		anhourColor(0);
		anhourColor(1);
		anhourColor(2);
		anhourColor(3);
		anhour_typeName[4].style.cssText = 'background-color:#f10180; color:#fff';

	} else if (top > 6101) {
		anhour.style.display = 'block';
		anhourColor(0);
		anhourColor(1);
		anhourColor(2);
		anhourColor(3);
		anhourColor(4);
	} else {
		anhour.style.display = 'none';
	}
}

function anhourColor(i) {
	var anhour_typeName = getEBClass('anhour_typeName');
	return anhour_typeName[i].style.cssText = 'background-color:#fff; color:#f10180';
}


function getEBID(idValue) {
	return document.getElementById(idValue);
}

function getEBClass(classValue) {
	return document.getElementsByClassName(classValue);
}

var loadBtn = getEBID('loadBtn');
loadBtn.onclick = function () {
	var hide = getEBClass('hide')[0];
	var wom_content = getEBClass('wom_content')[0];
	wom_content.style.height = '1664px';
	hide.style.display = 'block';

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
	anhour.style.left = "-90px";
	anhour_hidden_box.style.display = "block";
}



		var dir_box_dress = getEBID('dir_box_dress');
		dir_box_dress.onclick = function(){
			self.location.href="../dressSecond/dressSecond.html";
		}
