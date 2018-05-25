define(["jquery"],function(){
//	console.log(1);
	var JSON = {
		emile:{
			el:$("#emile"),
			reg:/\w{6,20}@[a-z0-9]{2,6}\.[a-z]{2,6}/,
			hasVaild:false
		},
		password:{
			el:$("#pwd"),
			reg:/^[a-z0-9\u0021-\u002f]{6,20}$/i,
			hasVaild:false
		},
		phone:{
			el:$("#phone"),
			reg:/^[1][3,4,5,7,8][0-9]{9}$/,
			hasVaild:false
		},
		confirm:{
			el:$("#confirm"),
			reg:/^[a-z0-9\u0021-\u002f]{6,20}$/i,
			hasVaild:false
		}
	}
//验证邮箱
		var emileel = JSON.emile.el;
		var emilereg = JSON.emile.reg;
		var hasVaild = JSON.emile.hasVaild;
	//	alert(hasVaild)
		var playholder1 = document.getElementById("playholder1")		
		emileel[0].onblur = function(){
			var emilevalue = this.value;
			if(!emilereg.test(emilevalue)){
				playholder1.style.display = "block"
				emileel[0].style.border = "2px solid #e55757";
				JSON.emile.hasVaild = "false";
			}else{
				playholder1.style.display = "none"
				emileel[0].style.border = "2px solid blue";
				JSON.emile.hasVaild = "true";
			}			
		}	
//验证密码
		var pwel = JSON.password.el;
		var pwreg = JSON.password.reg;
		var playholder2 = document.getElementById("playholder2")
		pwel[0].onblur = function(){
		var pwvalue = this.value;
		if(!pwreg.test(pwvalue)){
			playholder2.style.display = "block";
			pwel[0].style.border = "2px solid #e55757";
			JSON.password.hasVaild = false;
		}else{
			pwel[0].style.border = "2px solid blue";
			playholder2.style.display = "none";
			JSON.password.hasVaild = true;
		}
	}
//确认密码
		var confirmel = JSON.confirm.el;
		var confirmreg = JSON.confirm.reg;
		var playholder3 = document.getElementById("playholder3")
		confirmel[0].onblur = function(){
			var confirmvalue = this.value;
			if(confirmvalue!= pwel[0].value){
				playholder3.style.display="block";
				confirmel[0].style.border = "2px solid #e55757";
				JSON.confirm.hasVaild = false;
			}else if(confirmvalue == pwel[0].value && confirmreg.test(confirmvalue)){
				playholder3.style.display="none";
				confirmel[0].style.border = "2px solid blue";
				JSON.confirm.hasVaild = true;
			}
		}
//手	机号
		var phoneel = JSON.phone.el;
		var phonereg = JSON.phone.reg;
		var playholder4 = document.getElementById("playholder4")
		phoneel[0].onblur = function(){
		var phonevalue = this.value;
		if(!phonereg.test(phonevalue)){
			playholder4.style.display = "block";
			phoneel[0].style.border = "2px solid #e55757";
			JSON.phone.hasVaild = false;
		}else{
			phoneel[0].style.border = "2px solid blue";
			playholder4.style.display = "none";
			JSON.phone.hasVaild = true;
		}
	}
	//点击进行注册信息提交	
	$("#button_register_sms_verify_code_button").on("click",function(){
			var emile = $("#emile").val();
			var pwd = $("#pwd").val();
			var phone = $("#phone").val();
			var opt = {
				url:"php/user.php",
				type:"POST",
				data:{emile:emile,password:pwd,phone:phone,type:'register'}
			}
			//标记变量 所有的正则都匹配成功后再发起Ajax请求
			var flag = 0;
			for(var i in JSON){			
				if(JSON[i].hasVaild == true){
					flag++;
					//console.log(flag)
				}
			}
			if(flag == 3){
				$.ajax(opt)
				.then(function(res){
				//console.log(res)
					if(res == '3'){
						alert('注册成功');
						window.location.href = "main.html";//注册成功 跳转到主页面
					}else if(res == '2'){
						alert("注册失败，用户名重复")//注册失败
					}
				})
			}else{
				alert("请完善您的注册信息")
			}
		})	
	//随机验证码
	$(function(){
		$(".captcha_img_wrapper_a").on("click",function(){
			var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
			var str = [];
			for(var i = 0 ; i < 4 ; i ++){
				str.push(arr[Math.floor(Math.random() * arr.length)]) ;
			}			
			$(".captcha_img_wrapper_div").html(str.join(" "))
		})
	})
	//点击获取短信验证码
	$(function(){
		$(".button_register_sms_verify_code_button").on("click",function(){
			var countdown = setInterval(CountDown, 1000);
			var count = 60;
				function CountDown(){
					$(".button_register_sms_verify_code_button").html("Please wait " + count + " seconds!");
					if(count == 0){
						$(".button_register_sms_verify_code_button").html("点击获取短信验证码");
						clearInterval(countdown);
					}
					count--;
				}
			})
		})
})



