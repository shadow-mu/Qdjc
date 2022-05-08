const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'
var fullname=path.basename(fpath)
console.log(fullname)

var nameWithoutExt=path.basename(fpath,'.html')
console.log(nameWithoutExt)