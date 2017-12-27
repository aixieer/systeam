// JavaScript Document
$(function(){
	var picWidth=1220;
	var num=0;//marginTop
	
	$("#acg .sleft li").mouseenter(function(){
		var num=$(this).index()*picWidth;
		$("#acg .go").stop().animate({"margin-left":-num+"px"},1000);
		$("#acg .dt1").stop().animate({"margin-left":(-num+1220)*$(this).index()+"px"},1000);
		$("#acg .dt2").stop().animate({"margin-left":(-num+1220*$(this).index())+"px"},1000);
		
		
		
		$("#acg ul li").removeClass("on");
		$(this).addClass("on");
	});
	
	
	
});