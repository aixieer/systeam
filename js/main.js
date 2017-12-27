$(function(){
	var picWidth=1400;
	var num=0;//marginTop
	
	$("#tab .sleft li").click(function(){
		var num=$(this).index()*picWidth;
		$("#tab .go").stop().animate({"margin-left":-num+"px"},1000);
		$("#tab .dt1").stop().animate({"margin-left":(-num+1400)*$(this).index()+"px"},1000);
		$("#tab .dt2").stop().animate({"margin-left":(-num+1400*$(this).index())+"px"},1000);
		
		
		
		$("#tab ul li").removeClass("on");
		$(this).addClass("on");
	});
	
	
	
});