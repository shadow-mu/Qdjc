/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 导入数据库操作
const db = require('../db/index')
// 导入 `bcryptjs`
const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt=require('jsonwebtoken')
//导入配置文件
const config=require('../config')
// 注册用户的处理函数
exports.regUser = (req, res) => {
	// res.send('reguser OK')
	const userinfo = req.body
	// 对表单中的数据，进行合法性的校验
	if (!userinfo.username || !userinfo.password) {
		return res.send({
			status: 1,
			message: '用户名或密码不能为空！'
		})
	}
	//定义sql语句查询用户名是否被占用
	  const sqlStr = 'select * from ev_users where username=?'
	db.query(sqlStr, userinfo.username, (err, results) => {
		if (err) {
			// return res.send({
			// 	status: 1,
			// 	message: err.message
			// })
			return res.cc(err)
		}
		//判断用户名是否被占用
		if (results.length > 0) {
			// return res.send({
			// 	status: 1,
			// 	message: '用户名被占用，请换其他用户名'
			// })
			return  res.cc('用户名被占用，请换其他用户名')
		}
		//TODO用户名可以使用
		// 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
		userinfo.password = bcrypt.hashSync(userinfo.password, 10)
		//插入新用户
		// 定义插入用户的 SQL 语句：
		const sql = 'insert into ev_users set ?'
		//调用函数
		db.query(sql, {
			username: userinfo.username,
			password: userinfo.password
		}, (err, results) => {
			//判断是否执行成功
			if (err) {
				// return res.send({
				// 	status: 1,
				// 	message: err.message
				// })
				return  res.cc(err)
			}
			// SQL 语句执行成功，但影响行数不为 1
			if (results.affectedRows !== 1) {
				// return res.send({
				// 	status: 1,
				// 	message: '注册用户失败，请稍后再试！'
				// })
				return  res.cc('注册用户失败，请稍后再试')
			}
			//注册成功
			// res.send({ status: 0, message: '注册成功！' })
			res.cc('注册成功！',0)
		})


	})
}
//
// 登录的处理函数
exports.login = (req, res) => {
	// res.send('login ok')
	// 接收表单数据：
	const  userinfo=req.body
	// 定义 SQL 语句：根据用户名查询用户信息
	const sql=`select * from ev_users where username=?`
	//执行 SQL 语句，查询用户的数据：
	db.query(sql,userinfo.username,(err, results)=>{
		// 执行 SQL 语句失败
		if (err) return res.cc(err)
		  //执行 SQL 语句成功，但是查询到数据条数不等于 1
		if (results.length !== 1) return res.cc('登录失败！')
		// TODO：判断用户输入的登录密码是否和数据库中的密码一致
		// 拿着用户输入的密码,和数据库中存储的密码进行对比
		const compareResult=bcrypt.compareSync(userinfo.password,results[0].password)
		// 如果对比的结果等于 false, 则证明用户输入的密码错误
		if(!compareResult){
			return res.cc('登录失败密码错误！')
		}
		//登录成功在服务器端生成token
		// res.send('ok')
		//核心注意点：在生成 Token 字符串的时候，一定要剔除 密码 和 头像 的值
		// 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
		//password: ''意思是覆盖原来的值
		const user = { ...results[0], password: '', user_pic: '' }
		// console.log(user)
		//生成tokenStr=jwt
		const tokenStr=jwt.sign(user,config.jwtSecretKey,{
			expiresIn:'10h'// token 有效期为 10 个小时
		})
		// 将生成的 Token 字符串响应给客户端：
		res.send({
			status:0,
			message: '登录成功！',
		// 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
			token:'Bearer '+tokenStr,
		})
	})
}
