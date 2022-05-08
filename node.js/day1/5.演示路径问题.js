const fs = require('fs')
// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
// fs.readFile('./files/111.txt','utf-8',(err,datastr)=>{
// 	if(err){
// 		return console.log('文件读取失败'+err.message)
// 	}
// 	console.log('成功')
// })
// 移植性非常差、不利于维护
// fs.readFile('E:\\文档\\HBuilderX\\案例\\node.js\\day1\\files\\111.txt','utf-8',(err,datastr)=>{
// 	if(err){
// 		return console.log('文件读取失败'+err.message)
// 	}
// 	console.log('成功')
// })

// __dirname 表示当前文件所处的目录
console.log(__dirname)
fs.readFile(__dirname+'/files/111.txt','utf-8',(err,datastr)=>{
	if(err){
		return console.log('文件读取失败'+err.message)
	}
	console.log('成功')
})