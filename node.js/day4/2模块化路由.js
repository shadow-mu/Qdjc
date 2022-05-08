const express=require('express')
const app =express()
// app.use(express.static('./files'))
//导入路由模块
const userRouter=require('./3router')
//注册路由模块
//注意 app.use()函数的作用，就是来注册全局中间件
app.use('/api',userRouter)
app.listen(80,()=>{
	 console.log('http://127.0.0.1')
})