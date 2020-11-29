		function getEBID(idValue){
			return document.getElementById(idValue);
		}

		function getEBClass(classValue){
			return document.getElementsByClassName(classValue);
		}

		// 选择手机号注册或邮箱注册时的触发事件
		var loginBtnDiv = getEBID('loginBtnDiv');
		var registBtnDiv = getEBID('registBtnDiv');
		var login_formBox = getEBClass('login_formBox');
		var regist_formBox = getEBClass('regist_formBox');

		loginBtnDiv.onclick = function(){
			loginBtnDiv.style.cssText = 'background-color: #f43499; color: #fff';
			registBtnDiv.style.cssText = 'background-color: #fff; color: #f43499';
			login_formBox[0].style.display = 'block';
			regist_formBox[0].style.display = 'none';
			console.log('111');
		}

		registBtnDiv.onclick = function(){
			
			loginBtnDiv.style.cssText = 'background-color: #fff; color: #f43499';
			registBtnDiv.style.cssText = 'background-color: #f43499; color: #fff';
			login_formBox[0].style.display = 'none';
			regist_formBox[0].style.display = 'block';
			console.log('222');
		}

		// 登陆界面

		// 鼠标焦点后出现提示
		// // 手机号
		var userName = getEBID('userName');
		var phTip = getEBID('phTip');
		userName.onblur = function(){
			phTip.style.display = "block";
			var msg = userName.value;
			// console.log(msg);
			phCheck(msg);
		}


		 // 密码
		var password = getEBID('password');
		var pwTip = getEBID('pwTip');
		password.onblur = function(){
			pwTip.style.display = "block";
			var msg = password.value;
			// console.log(msg);
			pwCheck(msg);
		}


			// 手机号码输入信息错误提示
		function phCheck(msg){
			phTip.innerHTML = '';
			var reg1 = /^1[3456789]\d{9}$/ig;
			var count = reg1.test(msg);

			if(count == false){
				phTip.innerHTML='请填写正确的手机号!';
				return false
			}
			return true;

		}

		// 密码框输入信息错误提示
		function pwCheck(msg){
			// var pwTip = getEBID('pwTip');
			pwTip.innerHTML = '';
			var reg1 = /^[a-zA-Z0-9_]{6,16}$/ig;
			var count = reg1.test(msg);

			var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/
			var zmCount = reg2.test(msg);

			if(count == false){
				pwTip.innerHTML='长度应为6～16个字符！';
				return false
			}else if(zmCount == false){
				pwTip.innerHTML='密码过于简单需“字母+数字”!';
			}
			return true;

		}


		// 存储已注册数据
		var registDate = {
			registMsg:[
				{'userPhone': '18444562395','password':'123456a'},
				{'userPhone': '18444564562','password':'123456q'}
			]
		}


		// 点击登录时判断该手机号密码是否已注册
		var loginBtn = getEBID('loginBtn');
		loginBtn.onclick = function(){
			var userName = getEBID('userName');
			var password = getEBID('password');
			var userNameMsg = userName.value;
			var passwordMsg = password.value;
			console.log(userNameMsg);
			for(var i = 0; i < registDate.registMsg.length; i++){
				if(registDate.registMsg[i].userPhone == userNameMsg && registDate.registMsg[i].password == passwordMsg){
					alert('登录成功');
					self.location.href ="../index/index.html";
					return true;
				}
			}
			alert('密码不正确或该账号未注册！');
			return false;

		}



		