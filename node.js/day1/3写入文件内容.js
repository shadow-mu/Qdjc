// 1. 导入 fs 文件系统模块
const fs=require('fs')
//调用fs.writeFile()写入文件内容
//    参数1：表示文件的存放路径
//    参数2：表示要写入的内容
//    参数3：回调函数
fs.writeFile('./files/2.txt','abcd',(arr)=>{
	//如果文件写入成功arr=null
	//如果文件写入失败，则 err 的值等于一个 错误对象
	if(arr){
		return console.log('文件写入失败'+err.message)
	}
	console.log('文件写入成功')
})