!function(){
	window.fn={};
	fn.snow=function(options){
		var documentWidth=document.documentElement.clientWidth;
		var documentHeight=document.documentElement.clientHeight;
		var defaults={
			minSize:5,
			maxSize:10,
			newOn:200,
			flakeColor:"#fff",
			flakeSpeed:5
		}
		var option=options||defaults;
		var inertval=setInterval(function(){
			var flake=document.createElement("div")
			var left=Math.random()*documentWidth;
			var opacity=Math.random()+0.5;
			var size=Math.random()*(option.maxSize-option.minSize)+option.minSize;
			flake.style.cssText="border-radius:50%;position:absolute;width:"+size+"px;height:"+size+"px;opacity:"+opacity+";left:"+left+"px;background:"+option.flakeColor+";";
			document.body.appendChild(flake);
			animate(flake,option.flakeSpeed);
		},option.newOn)
		function animate(obj,speed){
			var top=0;
			var timer=setInterval(function(){
				top+=speed;
				obj.style.top=top+"px";
				if(top>documentHeight){
					clearInterval(timer);
					obj.parentNode.removeChild(obj);
				}
			},13)
		}
	}
}()
