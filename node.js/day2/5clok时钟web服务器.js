const http =require('http')
const path =require('path')
const fs =require('fs')

const server=http.createServer();
server.on('request',(req,res)=>{
	// 获取到客户端请求的 URL 地址
	//     /clock/index.html
	//     /clock/index.css
	//     /clock/index.js
	const url=req.url
	// const fpath=path.join(__dirname,url)
	let fpath=''
	if(url==='/'){
		fpath=path.join(__dirname,'./clock/index.html')
	}else{
		//     /index.html
		//     /index.css
		//     /index.js
		fpath=path.join(__dirname,'./clock',url)
	}
	fs.readFile(fpath,'utf-8',(err,datastr)=>{
		if(err){return res.end('404 Not found.')}
		res.end(datastr)
	})
	
	
})
server.listen(80,()=>{
	console.log('server running at http://127.0.0.1')
	
})