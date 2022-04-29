$(function() {
	// 函数节流阀
	var flag=true;
	var toolTop = $(".recommend").offset().top;
	toggleTop();
	function toggleTop() {
		if ($(document).scrollTop() >= toolTop) {
			$(".fixedtool").fadeIn()
		} else {
			$(".fixedtool").fadeOut()
		}
	}
	$(window).scroll(function(){
		toggleTop();
		// 3.
	if(flag){
		$(".floor .w").each(function(i,ele){
			if($(document).scrollTop()>=$(ele).offset().top){
			$(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
			}
		})
	}
	})
	
	$(".fixedtool li").click(function(){
		flag=false;
		$(this).addClass("current").siblings().removeClass("current");
		var current=$(".floor .w").eq($(this).index()).offset().top
		
		$("body,html").stop().animate({
			scrollTop:current
		},function(){
			// 回调函数
			flag=true;
		})
	})
	
	
})
