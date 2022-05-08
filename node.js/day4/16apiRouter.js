// 导入 express
const express = require('express')
const router = express.Router()

//在这里挂载路由
router.get('/get', (req, res) => {
	//同过req.query获取客户端通过查询字符串发送到服务器的数据
	const query = req.query
	//调用res.send()方法，向客户端响应处理结果
	res.send({
		status: 0, // 0 表示处理成功，1 表示处理失败
		msg: 'GET 请求成功！', // 状态的描述
		data: query, // 需要响应给客户端的数据
	})
})
router.post('/post',(req,res)=>{
	//1.获取客户端通过请求体，发送到服务器的URL-encoded数据
	const body=req.body
	// 调用 res.send() 方法，向客户端响应结果
	res.send({
	  status: 0,
	  msg: 'POST 请求成功！',
	  data: body,
	})
})
//定义DELETE接口
router.delete('/delete',(req,res)=>{
	res.send({
	  status: 0,
	  msg: 'DELETE 请求成功！',
	})
})
module.exports = router
