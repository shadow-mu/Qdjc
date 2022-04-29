$(function() {
	// 初始化右侧滚动条
	// 这个方法定义在scroll.js中
	// resetui()表示跳转到最下面
	resetui()
	//内容渲染到窗口
	$('#btnSend').on('click', () => {
		var text = $('#ipt').val().trim();
		if (text == '') {
			return $('#ipt').val('')
		}
		$('#talk_list').append('<li class="right_word"><img src="img/person02.png" /><span >' + text +
			'</span></li>')
			resetui()
			$('#ipt').val('');
			getMsg(text);
	})
	//机器人回复
	function getMsg(text){
		$.ajax({
			method:'get',
			url:'http://www.liulongbin.top:3006/api/robot',
			data:{spoken: text},
			success: (res) => {
				console.log(res)
				if(res.message==='success'){
					var mag=res.data.info.text
					$('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>'+mag+'</span> </li>')
					resetui()
					getVoice(mag);
				}
			}	
		})
	}
	//消息转换成语音
	function getVoice(text){
		$.ajax({
			method:'get',
			url:'http://www.liulongbin.top:3006/api/synthesize',
			data:{text:text},
			success:(res)=>{
				console.log(res)
				if(res.status===200){
					$('#voice').attr('src',res.voiceUrl)
				}
			}
		})
	}
	//回车
	$('#ipt').on('keyup',(e)=>{
		if(e.keyCode===13){
			$('#btnSend').click();
		}
	})
	
})
