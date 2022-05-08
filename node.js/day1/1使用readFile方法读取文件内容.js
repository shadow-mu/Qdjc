// 1. 导入 fs 模块，来操作文件
const fs =require('fs')
// 2.调用fs.readFile()方法读取文件
//    参数1：读取文件的存放路径
//    参数2：读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
fs.readFile('./files/111.txt','utf-8',(err,dataStr)=>{
	// 2.1 打印失败的结果
	//如果读取成功err的值为null
	//如果读取失败err的值为错误对象，dataStr的值为undefined
	console.log(err)
	console.log('------')
	// 2.2 打印成功的结果
	console.log(dataStr)
})