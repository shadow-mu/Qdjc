const path = require('path')
const fs = require('fs')
//注意../会抵消前面的路径
// const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
// console.log(pathStr)  // \a\b\d\e

// fs.readFile(__dirname + '/files/1.txt')

fs.readFile(path.join(__dirname,'/files/111.txt'),'utf-8',(err,datastr)=>{
	if(err){
		return console.log(err.message)
	}
	console.log(datastr)
})
