window.onload=function(){
	var timer=null;
	var index=1;
	var box=document.getElementById('right');
	var pic=document.getElementById('banner');
	var list=document.getElementsByTagName('img');
	timer=setInterval(function(){
		index++;
		if(index>3){
			index=1;
		}
		pic.style.left=(-810)*(index-1) + 'px';
	},2000);
}
