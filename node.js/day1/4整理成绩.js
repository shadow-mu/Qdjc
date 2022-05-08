// 1. 导入 fs 模块
const fs = require('fs')
//读取
fs.readFile('./files/成绩.txt','utf-8',(err,dataStr)=>{
	if(err){
		return console.log('成绩读取失败'+err.message)
	}
	// console.log('读取文件成功'+dataStr)
	// 先把成绩的数据，按照空格进行分割
	var arrOld=dataStr.split(' ')
	var arrNew=[];
	// 循环分割后的数组，对每一项数据，进行字符串的替换操作
	arrOld.forEach((item)=>{
		arrNew.push(item.replace('=',':'))
	})
	// 把新数组中的每一项，进行合并，得到一个新的字符串
	var newstr=arrNew.join('\r\n')
	// 调用 fs.writeFile() 方法，把处理完毕的成绩，写入到新文件中
	fs.writeFile('./files/成绩-ok.txt',newstr,(err)=>{
		if(err){
			return console.log('成绩写入失败'+err.message)
		}
		console.log('成绩写入成功')
	})
})