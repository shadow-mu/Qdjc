//这个包的入口文件
const date=require('./src/dateFormat')
const Escape=require('./src/htmlEscape')
//...表示展开运算符
module.exports={
	...date,
	...Escape
}