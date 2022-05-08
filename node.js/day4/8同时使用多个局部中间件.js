// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 1. 定义中间件函数
const mw1=(req,res,next)=>{
	  console.log('调用了局部生效的mw1中间件')
	  next();
}
const mw2=(req,res,next)=>{
	  console.log('调用了局部生效的mw2中间件')
	  next();
}
app.get('/',[mw1,mw2],(req,res)=>{
	res.send('Home page.')
})
app.get('/user', (req, res) => {
  res.send('User page.')
})
app.listen(80,()=>{
	console.log('Express server running at http://127.0.0.1')
})