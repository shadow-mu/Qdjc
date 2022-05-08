const fs = require('fs');
const path = require('path')

// 匹配style标签
//其中\s 表示空白字符 \S表示非空白字符 *表示匹配任意次数
const regstyle = /<style>[\s\S]*<\/style>/
//匹配script标签
const regscript = /<script>[\s\S]*<\/script>/
//调用fs读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, datasty) => {
	// 读取文件
	if (err) {
		return console.log("读取文件失败", err.message)
	}
	// console.log(datasty)
	//调用指定的函数
	resolveCSS(datasty)
	resolveJS(datasty)
	resolveHTML(datasty)
})
// 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
	// 使用正则表达式提取网页中的标签
	const r1 = regstyle.exec(htmlStr)
	//  将提取出来的样式字符串，进行字符串的 replace 替换操作
	const newcss = r1[0].replace('<style>', '').replace('</style>', '')
	// 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
	fs.writeFile(path.join(__dirname, '/clock/index.css'), newcss, err => {
		if (err) {
			return console.log('写入css文件失败'+err.message)
		}
		console.log('写入css样式成功')
	})
}
// 定义处理js的方法

function resolveJS(htmlStr) {
	// 使用正则表达式提取网页中的标签
	const r2 = regscript.exec(htmlStr)
	//  将提取出来的样式字符串，进行字符串的 replace 替换操作
	const newjs=r2[0].replace('<script>','').replace('</script>','')
	// 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.js 的文件里面
	fs.writeFile(path.join(__dirname,'./clock/index.js'),newjs,err=>{
		if(err){return console.log('写入js文件失败'+err.message)}
		console.log('写入js文件成功')
	})
}
// 定义处理html的方法

function resolveHTML(htmlStr) {
	//将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
	const newhtml=htmlStr.replace(regstyle,'<link rel="stylesheet" href="./index.css" />').replace(regscript,'<script src="./index.js"></script>')
	// 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.html 的文件里面
	fs.writeFile(path.join(__dirname,'./clock/index.html'),newhtml,err=>{
		if(err){return console.log('写入html文件失败'+err.message)}
		console.log('写入html文件成功')
	})
}

// 4.案例的两个注意点
// ①fs.writeFile0方法只能用来创建文件，不能用来创建路径