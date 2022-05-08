// 导入 express
const express = require('express')
// 创建服务器的实例对象
const app = express()
// 导入并配置 cors 中间件
const cors = require('cors')
const joi = require('joi')
//导入密钥
const config=require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
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
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api\//]}))
// 导入并注册用户路由模块
const userRouter=require('./router/user')
app.use('/api',userRouter)
// 导入并使用用户信息路由模块
const userinfoRouter =require('./router/userinfo')
app.use('/my',userinfoRouter)
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
// 导入并使用文章分类路由模块
const artCateRouter =require('./router/artcate')
// 为文章分类的路由挂载统一的访问前缀 /my/article
app.use('/my/article',artCateRouter)
//定义错误级别中间件
app.use((err,req,res,mext)=>{
	if(err instanceof joi.ValidationError) return res.cc(err)
	// 捕获身份认证失败的错误
	if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！') 
	//未知错误
	res.cc(err)
})
// 启动服务器
app.listen(3007, () => {
  console.log('api server running at http://127.0.0.1:3007')
})