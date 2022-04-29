function animate(obj, target,callback) {
				    var timer = setInterval(function() {
					// var step= Math.ceil((target-div.offsetLeft)/10)
					var step= (target-window.pageYOffset)/10
					step=step>0? Math.ceil(step) :Math.floor(step);
				        if (window.pageYOffset == target) {
				            // 停止动画 本质是停止定时器
				            clearInterval(timer);
							if(callback){
								callback();
							}
				        }
				       // window.pageYOffset = window.pageYOffset +step+ 'px'; = window.pageYOffset +step+ 'px';
						window.scroll(0,window.pageYOffset+step)
				    }, 15);
				}