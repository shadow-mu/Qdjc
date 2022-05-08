const itheima=require('./itheima-tools')
//格式化时间
const dtstr=itheima.dateFormat(new Date())
console.log(dtstr)

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str=itheima.htmlEscape(htmlStr)
console.log(str)


const str2 = itheima.htmlUnEscape(str)
console.log(str2)