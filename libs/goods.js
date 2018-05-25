define([
	'jquery',
	"main"
], function(){
	$(function(){
		//渲染购物车界面功能
	$(".btn2").on("click",function(){
		$(".mini_cart").animate({height:"590px"});
		$(".mini_cart").css("top","34px")
		$.ajax({
			url:"php/goods.php",
			type:"POST",
			data:{type:"select"}
		})
		.then(function(res){
			//console.log(JSON.parse(res))//res是数据库传来的商品信息
			var data1 ="";
			JSON.parse(res).forEach(function(item){//将JSON字符串转成数组对象进行循环遍历
				//console.log(item);
				data1 += `<div class="goods_border">
							<div class="mini_cart_content_goods">
								<img class="mini_cart_content_goods_pic" src='${item.link}' />
								<div class="mini_cart_content_goods_title">
									<a>${item.title}</a>
									<a class="mini_cart_content_goods_title_a" href="###">${item.connect}</a>
									<span class="goods_border_span1">-</span>
									<input class="goods_border_inp" type="text" value="1"/>
									<span class="goods_border_span2">+</span>
									<a class="mini_cart_content_goods_title_price" data-price="${item.price.split("￥")[1]}">${item.price}</a>
								</div>
							</div>
						</div>`;	
					})
			var div = $(".goods_item1");
			//console.log(div)
			div.html(data1);		 
			//购物车数量价格控制
			$(function(){
			//左右按钮控制数量加减
				$(".goods_border_span1").each(function(index,item){	//通过each遍历给每个选择框加一个click事件					
				//console.log($(item));
					$(item).on("click",function(event){
						var price = $(event.target).siblings(".mini_cart_content_goods_title_price");
						var num =  $(event.target).siblings(".mini_cart_content_goods_title_price").attr('data-price');//通过事件源找到价格栏目
						var value = $(this).next().val()*1 - 1;
						if(value < 0){
							return 0;
						}else{
							$(this).next().val(value);	
						}
						var price_value = num*value;
							//console.log(price_value);
						price.html("￥"+price_value);
					})
				})						
				$(".goods_border_span2").each(function(index,item){
					$(item).on("click",function(event){
						var price = $(event.target).siblings(".mini_cart_content_goods_title_price");							
						var value = $(this).prev().val()*1 + 1;
						$(this).prev().val(value);
						//通过事件源找到价格
						var num1 =  $(event.target).siblings(".mini_cart_content_goods_title_price").attr('data-price');
						var price_value = num1*value;
						price.html("￥"+price_value);
					})	
				})
			 })
		})
	})
	})
	
})

	

	
