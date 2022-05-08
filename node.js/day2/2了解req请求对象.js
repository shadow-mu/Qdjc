// 1. 导入 http 模块
const http = require('http')
// 2. 创建 web 服务器实例
const server=http.createServer()
// 3. 为服务器实例绑定 request 事件，监听客户端的请求
//req是请求对象包含了客户端的请求数据
server.on('request',(req,res)=>{
	//req.url 是客户端请求的url地址
	const url= req.url
	//req.method 是客户端请求的 method类型
	const method=req.method
	const str=`Your request url is ${url}, and request method is ${method}`
	console.log(str)
	//调用res.end() 向客户端响应内容
	res.end(str)
})
// 4. 启动服务器
server.listen(80,()=>{
	console.log('http server running at http://127.0.0.1')
})