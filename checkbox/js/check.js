window.onload=function(){
	var aLi=document.querySelectorAll(".box ul li");
	for (var i=0;i<aLi.length;i++) {
		aLi[i].ifCheck=false;//自定义属性
		aLi[i].nowClass=aLi[i].className;
		aLi[i].onclick=function(){
			this.className = this.ifCheck?this.nowClass:this.className+' check';
		}
	}
	var radio=document.querySelectorAll(".radio ul li");
	for (var i=0;i<radio.length;i++) {
		radio[i].onclick=function(){
			for (var j=0;j<radio.length;j++) {
				radio[j].className="radiostr";
			}
			this.className+=" radioend"
		}
	}
}
