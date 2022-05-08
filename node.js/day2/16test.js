//导入自定义模块
const TIME=require('./15deteFormat')

// 调用方法，进行时间的格式化
const dt=new Date()
console.log(dt)
 
const newdt= TIME.dateFormat(dt)
console.log(newdt)