		function getEBID(idValue){
			return document.getElementById(idValue);
		}

		function getEBClass(classValue){
			return document.getElementsByClassName(classValue);
		}

		// 加入购物车数量
		var countSubtract = getEBID('countSubtract');
		var countPlus = getEBID('countPlus');
		
		// 增加购物车数量
		countPlus.onclick = function(){
			var countValue = getEBID('countValue');
				// countValue.innerHTML++;
				var count = countValue.innerHTML++;
				console.log(count);
				if(count>6-2){
					alert('数量超出库存数！');
					return;
				}
		}

		countSubtract.onclick = function(){
			var countValue = getEBID('countValue');
				var count = countValue.innerHTML--;
				console.log(count);
				if(count<2){
					alert('数量不能小于1！');
					return;
				}
		}


		// 小图片变成大图片 视频
		var pics1 = getEBClass('pics1')[0];
		pics1.onmouseover = function(){
			var pic_video = getEBID('pic_video');
			var pic_img = getEBClass('pic_img');
			pic_video.style.display = 'block';
			pic_img[0].style.display = 'none';
			pic_img[1].style.display = 'none';
			pic_img[2].style.display = 'none';
			pic_img[3].style.display = 'none';
		}

		// 小图片变成大图片 图一
		var pics2 = getEBClass('pics2')[0];
		pics2.onmouseover = function(){
			var pic_video = getEBID('pic_video');
			var pic_img = getEBClass('pic_img');
			pic_video.style.display = 'none';
			pic_img[0].style.display = 'block';
			pic_img[1].style.display = 'none';
			pic_img[2].style.display = 'none';
			pic_img[3].style.display = 'none';
		}

		// 小图片变成大图片 图二
		var pics3 = getEBClass('pics3')[0];
		pics3.onmouseover = function(){
			var pic_video = getEBID('pic_video');
			var pic_img = getEBClass('pic_img');
			pic_video.style.display = 'none';
			pic_img[0].style.display = 'none';
			pic_img[1].style.display = 'block';
			pic_img[2].style.display = 'none';
			pic_img[3].style.display = 'none';
		}

		// 小图片变成大图片 图三
		var pics4 = getEBClass('pics4')[0];
		pics4.onmouseover = function(){
			var pic_video = getEBID('pic_video');
			var pic_img = getEBClass('pic_img');
			pic_video.style.display = 'none';
			pic_img[0].style.display = 'none';
			pic_img[1].style.display = 'none';
			pic_img[2].style.display = 'block';
			pic_img[3].style.display = 'none';
		}

		// 小图片变成大图片 图四
		var pics5 = getEBClass('pics5')[0];
		pics5.onmouseover = function(){
			var pic_video = getEBID('pic_video');
			var pic_img = getEBClass('pic_img');
			pic_video.style.display = 'none';
			pic_img[0].style.display = 'none';
			pic_img[1].style.display = 'none';
			pic_img[2].style.display = 'none';
			pic_img[3].style.display = 'block';
		}


		// 评论点赞
var thumbs = getEBClass('thumbs');
	thumbs[0].onclick = function(){
		thumbs[0].style.color = 'green';
	}
	thumbs[1].onclick = function () {
		thumbs[1].style.color = 'green';
	}
	thumbs[2].onclick = function () {
		thumbs[2].style.color = 'green';
	}


// 评论回复1
var comment_1 = getEBID('comment_1');
var commentInput = getEBClass('commentInput');
comment_1.onclick = function () {
	var discuss_1 = getEBID('discuss_1');
	discuss_1.style.height = '242px'
	commentInput[0].style.display = 'block';
}

// 确认评论回复1
var commentBtn = getEBClass('commentBtn');
var commentInput = getEBClass('commentInput');
commentBtn[0].onclick = function () {
	var commentText_1 = getEBID('commentText_1');
	var commentText_1_value = commentText_1.value;
	var selfComment = getEBClass('selfComment')[0];
	selfComment.innerText = '您的回复：' + commentText_1_value;
	commentInput[0].style.display = 'none';
	var discuss_1 = getEBID('discuss_1');
	discuss_1.style.height = '200px'
}


	// 评论回复2
var comment_2 = getEBID('comment_2');
var commentInput = getEBClass('commentInput');
comment_2.onclick = function(){
	var discuss_2 = getEBID('discuss_2');
	discuss_2.style.height = '242px'
	commentInput[1].style.display = 'block';
}

// 确认评论回复2
var commentBtn = getEBClass('commentBtn');
var commentInput = getEBClass('commentInput');
commentBtn[1].onclick = function(){
	var commentText_2 = getEBID('commentText_2');
	var commentText_2_value = commentText_2.value;
	var selfComment = getEBClass('selfComment')[1];
	selfComment.innerText = '您的回复：' + commentText_2_value;
	commentInput[1].style.display = 'none';
	var discuss_2 = getEBID('discuss_2');
	discuss_2.style.height = '200px'
}

// 评论回复3
var comment_3 = getEBID('comment_3');
var commentInput = getEBClass('commentInput');
comment_3.onclick = function () {
	var discuss_3 = getEBID('discuss_3');
	discuss_3.style.height = '242px'
	commentInput[2].style.display = 'block';
}

// 确认评论回复3
var commentBtn = getEBClass('commentBtn');
var commentInput = getEBClass('commentInput');
commentBtn[2].onclick = function () {
	var commentText_3 = getEBID('commentText_3');
	var commentText_3_value = commentText_3.value;
	var selfComment = getEBClass('selfComment')[2];
	selfComment.innerText = '您的回复：' + commentText_3_value;
	commentInput[2].style.display = 'none';
	var discuss_3 = getEBID('discuss_3');
	discuss_3.style.height = '200px'
}

