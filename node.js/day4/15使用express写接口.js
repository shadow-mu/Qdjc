// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()
// 配置解析表单数据的中间件
app.use(express.urlencoded({
	extended: false
}))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
	// TODO: 定义 JSONP 接口具体的实现过程
	// 1. 得到函数的名称
	const funcname=req.query.callback
	// 2. 定义要发送到客户端的数据对象
  const data = { name: 'zs', age: 22 }
	// 3. 拼接出一个函数的调用
	const scriptstr=`${funcname}(${JSON.stringify(data)})`
	// 4. 把拼接的字符串，响应给客户端
	res.send(scriptstr)
})
// 必须在配置 cors 中间件之前，配置 JSONP 的接口
// 使用const cors=require(cors)导入中间件
const cors = require('cors')
app.use(cors())
//导入路由
const router = require('./16apiRouter')
//把路由注册到app上
app.use('/api', router)
app.listen(80, () => {
	console.log('express server running at http://127.0.0.1')
})
