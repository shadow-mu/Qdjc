// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')
// 1.导入自己封装的中间件
const bodyParser=require('./14custom-body-parser')
//将自定义的中间件注册为全局可用的中间件
app.use(bodyParser)

app.post('/user',(req,res)=>{
	console.log(req.body)
	res.send(req.body)
})
//调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})