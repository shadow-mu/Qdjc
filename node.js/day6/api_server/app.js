// 导入 express
const express = require('express')
// 创建服务器的实例对象
const app = express()
// 导入并配置 cors 中间件
const cors = require('cors')
const joi require('joi')
// const joi = require('@hapi/joi')
app.use(cors())
//配置表单解析中间件
app.use(express.urlencoded({extended:false}))
//一定在路由之前
//封装错误函数
app.use((req,res,next)=>{
	//status默认为1 表示失败的情况
	//表示失败err的值可能是一个错误的描述字符串也可能是一个错误对象
	res.cc=function(err,status=1){
		res.send({
			status,
			message:err instanceof Error ? err.message:err
		})
	}
	next()
})
// 导入并注册用户路由模块
const userRouter=require('./router/user')
app.use('/api',userRouter)
//定义错误级别中间件
app.use((err,req,res,mext)=>{
	if(err instanceof joi.ValidationError) return res.cc(err)
	//未知错误
	res.cc(err)
})
// 启动服务器
app.listen(3007, () => {
  console.log('api server running at http://127.0.0.1:3007')
})