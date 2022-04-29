function resolveData(data) {
	var arr = []
	for (var k in data) {
		var str = k + '=' + data[k]
		arr.push(str)
	}
	return arr.join('&')
}
// var res=resolveData({name: 'zd', age: 20})
// console.log(res)
function Wlqq(options) {
	var xhr = new XMLHttpRequest();
	//把外界传递过来的对象转换为查询字符串
	var qs = resolveData(options.data)
	//toUpperCase()转换为大写
	if (options.method.toUpperCase() === 'GET') {
		//发起get请求
		xhr.open(options.method, options.url +'?'+qs)
		xhr.send()
	}else if(options.method.toUpperCase() === 'POST'){
		//发起post请求
		xhr.open(options.method, options.url)
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		xhr.send(qs);
	}
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var result = JSON.parse(xhr.responseText)
			options.success(result)
		}
	}
}
