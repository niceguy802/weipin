
		function getEBID(idValue){
			return document.getElementById(idValue);
		}

		function getEBClass(classValue){
			return document.getElementsByClassName(classValue);
		}

		// 下拉更多选项
		var loadMore = getEBID('loadMore');
		loadMore.onclick = function(){
			var choose = getEBID('choose');
			var show = getEBID('show');
			var chooseHide = getEBID('chooseHide');
			loadMore.style.display = 'none';
			choose.style.height = '250px'
			show.style.borderBottom = '1px dotted #ddd';
			chooseHide.style.display = 'block';
		}
		// 收起所有选项
		var close = getEBID('close');
		close.onclick = function(){
			var chooseHide = getEBID('chooseHide');
			var choose = getEBID('choose');
			var loadMore = getEBID('loadMore');
			var show = getEBID('show');
			chooseHide.style.display = 'none';
			choose.style.height = '150px';
			loadMore.style.display = 'block';
			show.style.borderBottom = 'none';
		}


		// 唯品服务点击多选
		var server_multiBtn = getEBID('server_multiBtn');
		server_multiBtn.onclick = function(){
			var choose_uncheckBox = getEBClass('choose_uncheckBox');
			var server = getEBClass('server')[0];
			var choose = getEBID('choose');
			var checkSureBox = getEBClass('checkSureBox')[0];
			server.style.height = '100px';
			choose.style.height = '200px';
			checkSureBox.style.display = 'block';
			for(var i = 0; i < choose_uncheckBox.length; i++){
				choose_uncheckBox[i].style.display = 'block';
			}
		}

		// 唯品服务点击多选后的取消按钮
		var choose_cancelBtn = getEBClass('choose_cancelBtn')[0];
		choose_cancelBtn.onclick = function(){
			var server = getEBClass('server')[0];
			var choose = getEBID('choose');
			var checkSureBox = getEBClass('checkSureBox')[0];
			var choose_checkBox = getEBClass('choose_checkBox');
			var choose_uncheckBox = getEBClass('choose_uncheckBox');
			server.style.height = '50px';
			choose.style.height = '150px';
			checkSureBox.style.display = 'none';
			for(var i = 0; i<choose_checkBox.length; i++){
				// var choose_checkBox = getEBClass('choose_checkBox');
				choose_checkBox[i].style.display = 'none';
			}
			for(var j = 0; j<choose_uncheckBox.length; j++){
				// var choose_uncheckBox = getEBClass('choose_uncheckBox');
				choose_uncheckBox[j].style.display = 'none';
			}
			
		}

		
		// 唯品服务点击未勾选多选框
		function uncheckOnclick(i){
			var choose_uncheckBox = getEBClass('choose_uncheckBox');
			choose_uncheckBox[i].onclick = function(){
				var choose_checkBox = getEBClass('choose_checkBox');
				choose_checkBox[i].style.display = 'block';
				choose_uncheckBox[i].style.display = 'none';
			}
		}		
		
		// 唯品服务点击已勾选多选框
		function checkOnclick(i){
			var choose_checkBox = getEBClass('choose_checkBox');
			choose_checkBox[i].onclick = function(){
				var choose_uncheckBox = getEBClass('choose_uncheckBox');
				choose_uncheckBox[i].style.display = 'block';
				choose_checkBox[i].style.display = 'none';
			}
		}

		uncheckOnclick(0);
		uncheckOnclick(1);
		uncheckOnclick(2);

		checkOnclick(0);
		checkOnclick(1);
		checkOnclick(2);

