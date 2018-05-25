define([
	'jquery'
], function() {
	// 隐藏菜单
	$("#txt_left").on("click",function(e){			
		$("#sticky_header1").css({
			"display":"block"
		})
		e.preventDefault();
	})
	$("#flag").on("click",function(){
		$("#sticky_header1").css("display","none")
		
	})
	//字体变色、隐藏菜单2
	$("#list1").on("mouseover",function(){
		$("#caizhuang").css({'display': 'block','position': 'absolute'});
		$(".ui_widget_overlay_bottom").css("display","block");
		showork();
	})
	$("#caizhuang").on("mouseover",function(){
		$("#caizhuang").css({'display': 'block','position': 'absolute'});
		$(".ui_widget_overlay_bottom").css("display","block");
	})
	$("#list1").on("mouseout",function(){
		$("#caizhuang").css("display","none");
		$(".ui_widget_overlay_bottom").css("display","none");
	})
	$("#caizhuang").on("mouseout",function(){
		$("#caizhuang").css("display","none");
		$(".ui_widget_overlay_bottom").css("display","none");
	})		
	//登陆注册界面			
	$("#txt_middle").on("click",function(){			
		$("#login_page_mes").css({
			"display":"block",
			"position":"relative"
		})
	})
	$("#btn4").on("click",function(){
		$("#login_page_mes").css("display","none");
	})
	//边界广告(二维码)			
	$("#ab_bottom").on("mouseover",function(){
		$("#pic1").css("display","block");
	})
	$("#pic1").on("mouseover",function(){
		$("#pic1").css("display","block");
	})
	$("#ab_bottom").on("mouseout",function(){
		$("#pic1").css("display","none");
	})
	$("#pic1").on("mouseout",function(){
		$("#pic1").css("display","none");
	})			
	//回到顶端
	$(function(){
		$("#backToTop").on("click",function(){
			$("body,html").animate({scrollTop:0},500);
		})
	})		
	$("body,html").on("mousewheel",function(){
		getTop();
	})
	function getTop(){
		if($(document).scrollTop()>200){
			$("#backToTop").css({
				'display':'block',
				});
		} else {
			$("#backToTop").css('display','none');
		}      	
	}
	//蒙版
	function showork(){
		$("#mask").css("height","100%");
		$("#mask").css("width","100%");
		$("#mask").show();
	}
	function hidework(){
		$("#mask").hide();
	}
	//商品详情
	$("#pdpMain_mark").on("click",function(){
		$(".pdpMain").css("display","none")
		$(".ui_widget_overlay").css("display","none")
	})	
	$("body").on("click",".cover_up",function(e){
		$(".pdpMain").css("display","block")
		$(".ui_widget_overlay").css("display","block")
	})

	//刻字
	var flag = true;
	$(".add_personal_engraving_cbx").on("mousedown",function(){
		if(flag){
			$(".add_personal_engraving_cbx_label2").css("display","none")
			$(".add_personal_engraving_cbx_label1").css("display","block")
			flag = false;
		}else{
			$(".add_personal_engraving_cbx_label2").css({
				"display":"block",
				"position":"absolute",
				"right":200
			})
			$(".add_personal_engraving_cbx_label1").css("display","none")
			flag = true;
		}
	})
	//Ajax渲染页面		
	//第一行
	$.ajax({
		url:"JSON/line1.json",
		success:function(res){
	//				console.log(res) res是line1.json中传来的四条数据
			res.forEach(function(item,index){
				if(item.type){
					creatListBig(item);
				}else{
					creatListSmall(item);
				}
			})
		}	
	});		
	//第二行
	$.ajax({
			url:"JSON/line2.json",
			success:function(res){
				res.forEach(function(item,index){
					if(item.type){
						creatListBig(item);
					}else{
						creatListSmall(item);
					}
				})
				creatTitle();
			}	
		});	
	function creatTitle(){
		var dataTitle =`<h2 class="moodboard_section_xp">新品</h2>`;	
		$("#goods_first_list1 ").append(dataTitle);
	}	
	//第三行
	$.ajax({
		url:"JSON/line3.json",
		success:function(res){
			res.forEach(function(item,index){
				if(item.type){
					creatListBig(item);
				}else{
					creatListSmall(item);
				}
			})
		}	
	});	
	//第四行
	$.ajax({
		url:"JSON/line4.json",
		success:function(res){
			res.forEach(function(item,index){
				if(item.type){
					creatListBig(item);
				}else{
					creatListSmall(item);
				}
			})
			creatTitle2();
		}	
	});	
	function creatTitle2(){
		var dataTitle2 = `<h2 class="moodboard_section_ts">探索发现</h2>`
		$("#goods_first_list1").append(dataTitle2);
	}
	//第五行
	$.ajax({
		url:"JSON/line5.json",
		success:function(res){
			res.forEach(function(item,index){
				if(item.type){
					creatListBig(item);
				}else{
					creatListSmall(item);
				}
			})
		}	
	});		
	//第六行 购物车（页面所有信息加载完毕后发起加载数据库的Ajax请求）
	$.ajax({
		url:"JSON/line6.json",
		success:function(res){
			res.forEach(function(item,index){
				if(item.type){
					creatListBig(item);
				}else{
					creatListSmall(item);
				}
			})
		}	
	});	
	function creatListBig(item){
		var $li = $("<li>");
		$li.addClass("box1");
		var $img = $("<img title='染唇液'>");
		$img.attr("src",item.link);
		$li.append($img);
		$("#goods_first_list1").append($li);
	}
	function creatListSmall(item){
		var data = `<li class="box2">
			<img class="pic27 img-flag" title="${item.title}" src="${item.link }"/>
			<a class="product_name ">${item.title}</a>
			<span class="product_subtitle">${item.content}</span>
			<div class="start">
				<img src="${item.picture}" />
			</div>
			<p class="product_price " title="Sale Price">${item.price}</p>
			<button type="submit" class="btn2"><a class="buy">立即购买</a><img src="image/17.png"/></button>
			<button type="submit" class="btn3"><a class="buy1">查看详情</a><img src="image/18.png"/></button>	
			<div class="cover_up">
				<div class="cover_up_box"><span class="cover_up_text">快速浏览</span></div>
			</div>
		</li>`;	
		var ul = document.getElementById("goods_first_list1");
		ul.innerHTML += data;
	//页面渲染完毕->添加购物车功能
		$(".btn2").each(function(index){
			$(".btn2").eq(index).on("click",function(){
					var link = $(this).prevAll(".pic27").attr("src");
					var title = $(this).prevAll(".product_name").html();//获取标签的value值
					var connect = $(this).prevAll(".product_subtitle").html();
					//console.log(connect)
					var price =$(this).prevAll(".product_price").html();
					//console.log(price)					
					$.ajax({
						url:"php/goods.php",
						type:"post",
						data:{
							link:link,
							title:title,
							connect:connect,
							price:price,
							type:"add"
						},
						async:true//是否异步
					})
					.then(function(res){
				})
			})
		})
	}		
	//详细商品信息遮罩层
	$("body").on("mouseenter",".img-flag",function(e){
		$(this).parent().find(".cover_up").css("display","block");			
	})
	$("body").on("mouseleave","li",function(e){
		$(".cover_up").css("display","none");
	})
	//购物车隐藏功能
	$("#buy").on("mouseover",function(){
		$(".mini_cart").animate({height:"590px"});
		
	})
	$(".mini_cart").on("mouseleave",function(){
		$(".mini_cart").animate({height:"0px"});
		$(".mini_cart").css({
			"border":"none",
			"top":"34px"
		})
	})	
});
