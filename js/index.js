$(function(){
	var 
	ratio=5,		//鼠标移动距离 / 盒子旋转度数
	startX,			//鼠标按下的X坐标
	startY,			//鼠标按下的Y坐标
	moveX,			//鼠标水平方向移动距离
	moveY,			//鼠标垂直方向移动距离
	rotateX,		//盒子X轴方向旋转角度
	rotateY,		//盒子Y轴方向旋转角度
	degX=0,			//盒子当前X方向的旋转角度
	degY=0;			//盒子当前Y方向的旋转角度
	$(window).on("mousedown",function(e){
		//鼠标按下的坐标
		startX=e.clientX;
		startY=e.clientY;
		$(window).on("mousemove",function(e){
			//鼠标移动的距离
			moveX=e.clientX-startX;
			moveY=e.clientY-startY;
			//根据一定比例将变化反应在盒子上，改变比例可以调节拖动的速度
			rotateY=degX+moveX/ratio;
			rotateX=degY-moveY/ratio;
			console.log(rotateX,rotateY,23)
			$(".J_box").css({transform:'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'});
		})
	})
	$(window).on("mouseup",function(e){
		//鼠标松开时将拖动期间改变的最终结果保存
		degX=degX+moveX/ratio;
		degY=degY-moveY/ratio;
		$(window).off("mousemove");
	})
})
