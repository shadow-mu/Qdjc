function getCommtList() {
	$.ajax({
		method: 'get',
		url: 'http://www.liulongbin.top:3006/api/cmtlist',
		data: {},
		success: (res) => {
			if (res.status !== 200) return alert('获取数据失败')
			var rows = []
			$.each(res.data, function(i, each) {
				rows.push(
					'<li class="list-group-item"><span class="badge" style="background-color:#61beda ;">' +
					each.time +
					'</span><span class="badge" style="background-color: #f4cc83;">' + each
					.username + '</span>' + each.content + '</li>')
			})
			$('.list-group-item').empty().animate().append(rows.join(''))
		}
	})
}
getCommtList()
$(function() {
	$('.panel-body').on('submit', (e) => {
		e.preventDefault(); //阻止表单默认跳转行为	
		var data = $('.panel-body').serialize();
		console.log(data)
		$.ajax({
			method: 'POST',
			url: 'http://www.liulongbin.top:3006/api/addcmt',
			data: data,
			success:(res)=>{
				console.log(res)
			}
		})
		getCommtList();
		// $('.form-control').animate().val('')
		// $('.panel-body')[0]转换成原生dom reset()清空form表单
		$('.panel-body')[0].reset()
		
	})
})
