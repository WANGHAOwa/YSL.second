define(["jquery"],function(){
		//登录正则验证
			var json = {
			emile:{
				el:$(".inp1"),
				reg:/\w{6,20}@[a-z0-9]{2,6}\.[a-z]{2,6}/,
				hasVaild:false
			},
			password:{
				el:$(".inp2"),
				reg:/^[a-z0-9\u0021-\u002f]{6,20}$/i,
				hasVaild:false
			}
		}		
		var emileel = json.emile.el;
	//	console.log(emileel)
		var emilereg = json.emile.reg;
		var hasVaild = json.emile.hasVaild;
	//	console.log(hasVaild)
		emileel[0].onblur = function(){
			var emilevalue = this.value;
			if(!emilereg.test(emilevalue)){
				emileel[0].style.border = "2px solid #e55757";
				json.emile.hasVaild = "false";
			}else{
				emileel[0].style.border = "2px solid blue";
				json.emile.hasVaild = "true";
			}			
		}			
	//验证密码
			var pwel = json.password.el;
			var pwreg = json.password.reg;
			pwel[0].onblur = function(){
			var pwvalue = this.value;
			if(!pwreg.test(pwvalue)){
				pwel[0].style.border = "2px solid #e55757";
				json.password.hasVaild = false;
			}else{
				pwel[0].style.border = "2px solid blue";
				json.password.hasVaild = true;
			}
		}
				//登录检测
		$(function(){
			$("#btn2").on("click",function(){
				var emile = $(".inp1").val();
				var pwd = $(".inp2").val();
				var opt = {
					url:"php/user.php",
					type:"POST",
					data:{emile:emile,password:pwd,type:"login"}	
				}		
				var flag =0;
				for(var i in json){
					if(json[i].hasVaild == true){
						flag ++;
	//					alert("登录成功")
					}		
				}	
				if(flag == 1){
					$.ajax(opt).then(function(res){
					if(res == "1"){
						window.location.href = "http://localhost/YSL/index.html";//登录成功后跳转到主页面
					}if(res == "0"){
						alert("登录失败")	
					}
				})	
			}			
		})
	})
})
		

		
	