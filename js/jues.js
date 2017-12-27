// JavaScript Document
window.onload=function(){
		var oNews=document.getElementById("box");
		var oSpan=oNews.getElementsByTagName("li");
		var oDiv=oNews.getElementsByTagName("dd");
		var num=oSpan.length;
		for(var i=0; i<oSpan.length;i++){
			oSpan[i].index=i;
			oSpan[i].onclick=function(){
					//console.log(this.index);
					for(var j=0;j<oSpan.length;j++){//关所以
						oSpan[j].className="";
						oDiv[j].className="";
					}
					this.className="on";//开一个
					oDiv[this.index].className="on";//this.index实现了，分类标题oSpan与oDiv一一对应的关系
			}
		}
};