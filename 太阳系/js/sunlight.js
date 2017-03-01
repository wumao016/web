window.onload=function(){
	var can=document.getElementById("canvas");
	var ctx=can.getContext("2d");
	function drawTrack(){
		ctx.strokeStyle="#fff";
		for (var i=0;i<8;i++) {
			ctx.beginPath();
			ctx.arc(450,450,(i+1)*50,0,2*Math.PI,false);
			ctx.stroke();
		}
	}
	var time=0;
	function drawStar(x,y,r,cycle,sColor,eColor){
		ctx.save();
		ctx.translate(450,450);
		ctx.rotate(time*Math.PI*(360/cycle)/180);
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI,false);
		var color =ctx.createRadialGradient(x,y,0,x,y,r);
		color.addColorStop(0,sColor);
		color.addColorStop(1,eColor);
		ctx.fillStyle=color;
		ctx.fill();
		ctx.restore();
		time+=0.4;
	};
	setInterval(function(){
		ctx.clearRect(0,0,900,900);
		drawTrack();
		drawStar(0,0,30,87,"#f00","#fc0");
		drawStar(100,0,20,224,"#f00","#fc0");
		drawStar(150,0,15,365,"#f00","#fc0");
		drawStar(200,0,30,686,"#f00","#fc0");
		drawStar(250,0,10,4332,"#f00","#fc0");
		drawStar(300,0,20,10759,"#f00","#fc0");
		drawStar(350,0,10,30799,"#f00","#fc0");
		drawStar(400,0,25,59860,"#f00","#fc0");
	},1000/60);
}
