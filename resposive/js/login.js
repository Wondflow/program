window.onload=function (){
       	var btn=document.getElementById("btnLogin");
       	btn.onclick=function(){
     	oMask.style.display="block";
     	oLogin.style.display="block";
     	oLogin.style.backgroundColor="#FFFFFF";
     	}
var oMask=document.getElementById("mask");
var oLogin=document.getElementById("login");
//获取页面高度和宽度
var sWidth=document.documentElement.scrollWidth;
var sHeight=document.documentElement.scrollHeight;
//创建遮罩

//获取遮罩高度和宽度

oMask.style.width =sWidth+"px";
oMask.style.height =sHeight+"px";
//获取视口宽度和高度

var cHeight=document.documentElement.clientHeight;
var cWidth=document.documentElement.clientWidth;

//创建登录节点

var dWidth=670;
var dHeight=380;
oLogin.style.left=(cWidth-dWidth)/2+"px";
oLogin.style.top=(cHeight-dHeight)/2+"px";
//oLogin.style.left=dWidth+"px";
//oLogin.style.top=dHeight+"px";
var oclose=document.getElementById("close");
oMask.onclick=oclose.onclick=function(){
	oMask.style.display="none";
    oLogin.style.display="none";
   }
     	
}
    


/*function openNew(){
	//获取页面的高度和宽度
	var sWidth=document.body.scrollWidth;
	var sHeight=document.body.scrollHeight;
	
	//获取页面的可视区域高度和宽度
	var wHeight=document.documentElement.clientHeight;
	
	var oMask=document.createElement("div");
		oMask.id="mask";
		oMask.style.height=sHeight+"px";
		oMask.style.width=sWidth+"px";
		document.body.appendChild(oMask);
	var oLogin=document.createElement("div");
		oLogin.id="login";
		oLogin.innerHTML="<div class='loginCon'><div id='close'>点击关闭</div></div>";
		document.body.appendChild(oLogin);
	
	//获取登陆框的宽和高
	var dHeight=oLogin.offsetHeight;
	var dWidth=oLogin.offsetWidth;
		//设置登陆框的left和top
		oLogin.style.left=sWidth/2-dWidth/2+"px";
		oLogin.style.top=wHeight/2-dHeight/2+"px";
	//点击关闭按钮
	var oClose=document.getElementById("close");
	
		//点击登陆框以外的区域也可以关闭登陆框
		oClose.onclick=oMask.onclick=function(){
					document.body.removeChild(oLogin);
					document.body.removeChild(oMask);
					}
	}

					
	window.onload=function(){
			var oBtn=document.getElementById("btnLogin");
				//点击登录按钮
				oBtn.onclick=function(){
					openNew();
					}
			}
*/



