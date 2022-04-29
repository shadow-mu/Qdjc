window.addEventListener('load', function() {
	var focus = document.querySelector('.focus');
	var ul = focus.children[0];
	var ol = focus.children[1];
	var w = focus.offsetWidth;
	var index = 0;
	var timer = setInterval(function() {
		index++;
		var translatex = -index * w;
		ul.style.transition = 'all .3s'
		ul.style.transform = 'translateX(' + translatex + 'px)';
	}, 2000)
	//监听过度
	ul.addEventListener('transitionend', function() {
		if (index >= 3) {
			index = 0;
			ul.style.transition = 'none';
			var translatex = -index * w;
			ul.style.transform = 'translateX(' + translatex + 'px)';
		} else if (index < 0) {
			index = 2;
			ul.style.transition = 'none';
			var translatex = -index * w;
			ul.style.transform = 'translateX(' + translatex + 'px)';
		}
		// 小圆点变化
		ol.querySelector('.current').classList.remove('current');
		ol.children[index].classList.add('current')

	})
	//手指滑动
	var startX = 0;
	var moveX = 0;
	var flag = false;
	ul.addEventListener('touchstart', function(e) {
		startX = e.targetTouches[0].pageX;
		clearInterval(timer);
	})
	ul.addEventListener('touchmove', function(e) {
		moveX = e.targetTouches[0].pageX - startX;
		var translatex = -index * w + moveX;
		//手指不需要动画
		ul.style.transition = 'none';
		ul.style.transform = 'translateX(' + translatex + 'px)';
		e.preventDefault();
		flag = true;
	})
	//手指离开
	ul.addEventListener('touchend', function(e) {
		if (flag) {
			if (Math.abs(moveX) > 50) {
				//如果右划movex是正的
				if (moveX > 0) {
					index--;
				}
				//如果左划movex是负的
				else {
					index++;
				}
				var translatex = -index * w;
				ul.style.transition = 'all .3s'
				ul.style.transform = 'translateX(' + translatex + 'px)';
			} else {
				var translatex = -index * w;
				ul.style.transition = 'all .3s'
				ul.style.transform = 'translateX(' + translatex + 'px)';
			}
		}
		//手指离开开启定时器
		clearInterval(timer);
		var timer = setInterval(function() {
			index++;
			var translatex = -index * w;
			ul.style.transition = 'all .3s'
			ul.style.transform = 'translateX(' + translatex + 'px)';
		}, 2000)
	})


	//返回顶部
	var goBack = document.querySelector('.goBack');
	var nav = document.querySelector('nav');
	window.addEventListener('scroll', function() {
		if (window.pageYOffset >= nav.offsetTop) {
			goBack.style.display = 'block';
		} else {
			goBack.style.display = 'none';
		}
	})
	goBack.addEventListener('click',function(){
		window.scroll(0,0)
	})
})
