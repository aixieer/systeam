// JavaScript Document
$(function(){
	/*准备: 初始化*/
	var num=$(".box_img ul li a").size();
	var index=0; //用于自动轮播
	var timer=null;
	var temp=0; //解决鼠标经过按钮无法顺序播放bug

	for(var i=0; i<num; i++){
		$(".box_tab").append('<a href="javascript:(void)">'+(i+1)+'</a>');
	}

	$(".box_img ul li").eq(0).show();
	$(".box_tab a").eq(0).addClass("active");

	/*功能部分*/
	//1.鼠标经过按钮
	$(".box_tab a").mouseover(function(){
		var temp=$(this).index();
		index=temp;
		console.log(index);

		$(this).addClass("active").siblings().removeClass("active");
		var i=$(this).index();
		$(".box_img ul li").eq(i).stop().fadeIn(400).siblings().fadeOut();
	});

	//2.自动轮播
	timer=window.setInterval(move,4000);
	function move(){
		index++;
		console.log(index);
		if(index==num) index=0;
		$(".box_img ul li").eq(index).fadeIn().siblings().fadeOut();
		$(".box_tab a").eq(index).addClass("active").siblings().removeClass("active");
	}

	//鼠标经过图片停止,离开继续
	$(".box_img").hover(function(){
		clearInterval(timer);
	},function(){
		timer=window.setInterval(move,3000);
	});

});