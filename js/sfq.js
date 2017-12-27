// JavaScript Document
window.onload=function(){
		$(function(){
			$(".voice_2 ul li").each(function(){
				var fold = $(this).find(".fold");
				var unfold = $(this).find(".unfold");
				if(fold.is(":hidden")){
					$(this).width(423);
				}else{
					$(this).width(106);
				}
			})
			$(".voice_2 ul li").mouseenter(function(){
				var li_index = $(this).index();
				$(this).animate({width:423},200);
				$(this).find(".unfold").show();
				$(this).find(".fold").hide();
				$(this).siblings().animate({width:106},200);
				$(this).siblings().find(".unfold").hide();
				$(this).siblings().find(".fold").show();
			})
		})
};