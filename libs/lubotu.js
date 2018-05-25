define([
    'jquery',
    'jqueryBanner'
], function() {
    $(".contentcarousel_asset_body")//外边的主体盒子
    .gpBanner("#contentcarousel_list",{//外边包裹的ul
        navigation: {
            nextEl: '.gp6-button-next',
            prevEl: '.gp6-button-prev',
        },
        pagination:{
            el:".gp6-banner-pagination"
        },
        direction:"fade",
        loop:true
    }) 
    timer1=setInterval(function(){
        $(".gp6-button-next").trigger("click")//自定点击左右两边的按钮进行轮播事件
    },3000)
    $(".pic_all").hover(function(){//第一个function是鼠标移入的事件,第二个function是鼠标移出的事件
        clearInterval(timer1)
    },function(){
        timer1=setInterval(function(){
            $(".gp6-button-next").trigger("click")
        },3000)
    })
    $(".gp6-banner-pagination").hover(function(){
        clearInterval(timer1)
    })   
});
