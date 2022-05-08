/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 导入数据库操作
const db = require('../db/index')
// 导入 `bcryptjs`
const bcrypt = require('bcryptjs')
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
	res.send('login ok')
}
