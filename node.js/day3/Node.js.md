# Node.js

### 1.Node.js简介
1.什么是Node.js
Node.js是个基于Chrome V8引的JavaScript运行环境。

2.Node,js中的JavaScript运行环境

![image-20220501104037911](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220501104037911.png)

注意：
1.浏览器是JavaScript的前端运行环境。
2.Node.js是JavaScript的后端运行环境，
3.Node.js中无法调用DOM和BOM等浏览器内置API。

3.Node.js可以做什么
Node.js作为一个JavaScript的运行环境，仅仅提供了基础的功能和APl。然而，基于Node.js提供的这些基础能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了Node.js,可以让前端程序员胜任更多的工作和岗位：

①基于Express框架(http://www.expressjs.com.cn),可以快速构建Web应用
②基于Electron框架(https://electronjs.org/),可以构跨平台的桌面应用
③基于restify框架(http://restify..com),可以快速构建API接口项目
④读写和操作数据库、创建实用的命令行工具铺助前端开发、etc.

总之：Node.js是大前端时代的“大宝剑”，有了Node.js这个超级buff的加持，前端程序员的行业竞争力会越来越强！

Node.js的学习路径：
JavaScript基础语法+Node.js内置API模块(fs、path、http等)+第三方API模块(express、.mysql等)

### 2.Node.js环境安装

安装包可以从Node.js的官网首页直接下载，进入到Node.js的官网首页(https://nodejs.org/en/),点击绿色的按钮，下载所需的版本后，双击直接安装即可。

1.区分LTS版本和Current版本的不同
①LTS为长期稳定版，对于追求稳定性的企业级项目来说，推荐安装LTS版本的Node.js。.
②Current为新特性尝鲜版，对热衷于尝试新特性的用户来说，推荐安装Current版本的Node.js。但是，Current版本中可能存在隐的Bug或支全性漏问，因此不推荐在企业级项目中使用Current版本的Node,js。

安装过程中一路Next就可以

2.查看已安装的Node.js的版本号

打开终端，在终端输入命令node -v 后，按下回车键，即可查看已安装的Node.js的版本号。

```
node -v
```

Vindows系统快速打开终端的方式：
使用快挂键(Windows徽标键+R)打开运行面板，输入cmd后直接回车，即可打开终端。![image-20220501105504153](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220501105504153.png)

3.什么是终端

终端（英文：Terminal))是专门为开发人员设计的，用于实现人机交互的一种方式。作为一名合格的程序员，我们有必要识记一些常用的终端命令，来辅助我们更好的操作与使用计算机。

### 3.初识Node.js

1.在Node.js环境中执行JavaScript代码
①打开終端
②输入node要执行的js文件的路径

```
cd 文件路径
```

cd 跳转到指定目录

```
node 1.js
```

node 需要执行的js文件

也可以在文件夹中直接右键终端运行或者在文件地址中直接输入cmd

2.终端中的快捷键
在Windows的powershell或cmd终端中，我们可以通过如下快捷键，来提高终端的操作效率：

①使用↑键，可以快速定位到上一次执行的命令
②使用tab键，能够快速补全路径
③使用esc键，能够快速清空当前已输入的命令
④输入cls命令，可以清空终端

### 4. fs文件系统模块

1.什么是fs文件系统模块

fs模块是Nod.js官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

例如：
1.fs.readFile()方法，用来读取指定文件中的内容
2.fs.writeFile()方法，用来向指定的文件中写入内容
如果要在JavaScript代码中，使用fs模块来操作文件，则需要使用如下的方式先导入它：

```
1 const fs = require('fs')
```

2.读取指定文件中的内容

1.fs.readFile()的语法格式
使用fs.readFile()方法，可以读取指定文件中的内容，语法格式如下：

```
1 fs.readFile(path[,options].callback)
```

参数解读：
·参数1：必选参数，path 字符串，表示文件的路径。
·参数2：可选参数，options 表示以什么编码格式来读取文件。
·参数3：必选参数，callback 文件读取完成后，通过回调函数拿到读取的结果。

2.fs.readFile()的示例代码
以utf8的编码格式，读取指定文件的内容，并特打印err和dataStr的值：

```js
 const fs = require('fs')
 fs.readFile('./files/11.txt','utf8',function(err,datastr){
 	console.log(err)
	console.log('-----')
 	console.log(datastr)
 })
```

err, dataStr拿到读取失败和成功的结果 

如果读取成功err的值为null
如果读取失败err的值为错误对象，dataStr的值为undefined

3.判断文件是否读取成功  
可以判断err对象是否为null,从而知晓文件读取的结果：

```js
const fs = require('fs')
fs.readFile('./files/1.txt','utf8',function(err,result){
if (err){
return console,.log('文件读取失数！'+err.message)
}
console.log("文件读取成功，内容是：·+result)
    })
```

3.向指定的文件中写入内容

1.fs.writeFile()的语法格式

使用fs.writeFile()方法，可以向指定的文件中写入内容，语法格式如下：

```
fs.writeFile(file,data[,options],callback)
```

●参数1：必选参数，file需要指定一个文件路径的字符串，表示文件的存放路径。
●参数2：必选参数，data表示要写入的内容。
●参数3：可选参数，options表示以什么格式写入文件内容，默认值是u8。
●参数4：必选参数，callback文件写入完成后的回调函数。

2.fs.writeFile()的示例代码
向指定的文件路径中，写入文件内容：

```
 const fs = require('fs')
 fs.writeFile('./files/2.txt','Hello Node.js!',function(err){
 console.log(err)
})
```

如果文件写入成功arr=null
如果文件写入失败，则 err 的值等于一个 错误对象

fs.writeFile()方法只能用来创建文件，不能用来创建路径

重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的l旧内容

3.判断文件是否写入成功

```
const fs = require('fs')
fs.writeFile('F:/files/2.txt','Hello Node.js!',function(err){
if (err){
return console.log('文件写入失败：'+err.message)
console.1og('文件写入成功：")
})
```

4.fs模块-路径动态拼接的问题
在使用fs模块操作文件时，如果提供的操作路径是以./或../开头的相对路径时，很容易出现路径动态拼接错误的问题，

原因：代码在运行的时候，会以执行node**命令时所处的目录**，动态拼接出被操作文件的完整路径。![image-20220501150429765](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220501150429765.png)

![image-20220501150613495](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220501150613495.png)

出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
如果要解决这个问题，可以直接提供一个完整的文件存放路径就行

E:\文档\HBuilderX\案例\node.js\day1\files

注意js里面一个 \ 代表转义 需要改成 \\\

缺点：移植性非常差、不利于维护

```
//不要使用，/或，//这样的相对路径
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
if(err)return console.log('读取文件失败！'+err.message)
console.log(dataStr)
})
//__dirname表示当前文件所处的目录
fs.readFile(dirname '/files/1.txt','utf8',function(err,datastr){
if(err)return console.log('读取文件失败！'+crr.message)
console.log(dataStr)
})
```

__dirname表示当前文件所处的目录

5.总结

### 5.什么是path路径模块
pth模快是Node.js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

path.join()方法，用来将多个路径片段拼接成一个完整的路径字符由
path.basename()方法，用来从路径字符串中，将文件名解析出来

如果要在JavaScript代码中，使用path模块来处理路径，则需要使用如下的方式先导入它：

```
 const path = require('path')
```

1.路径拼接
1.path.join()的语法格式
使用path.join()方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：

```
path.join([...paths])
```

参数解读：
●...paths <string>路径片段的序列 参数可以很多
●返回值：<string>  拼接好的路径字符串

2.path.join()的代码示例
使用path.join()方法，可以把多个路径片段拼接为完整的路径字符串：

```
const pathstr = path.join('/a'.'/b/c','../''./d','e')
console.log(pathstr)//输出\a\b\d\e
const pathstr2 = path.join(__dirname,'./files/1.txt')
console.log(pathstr2)/翰出当前文件所处目录\files\1.txt
```

../ 有抵消路径这个功能

注意：今后凡是涉及到路径拼接的操作，都腰使用path.join()方法进行处理，不要直接使用+进行字符中的拼接。

3.获取路径中的文件名
1.path.basename()的语法格式

使用path.basename()方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

```
 path.basename(path[,ext])
```

参数解读：
●path<string>必选参数，表示一个路径的字符串
●ext<string>可选参数，表示文件扩展名
●返回：<string>表示路径中的最后一部分

2.path.basename()的代码示例
使用path.basename()方法，可以从一个文件路径中，获取到文件的名称部分：

```js
 const fpath='/a/b/c/index.html'//文件的存放路径
 var fullName = path.basename(fpath)
 console.log(fullName)//输出index.html
 var namewithoutExt = path.basename(fpath.'.html')
 console.log(namewithoutExt)//输出index
```

4.获取路径中的文件扩展名
1.path.extname()的语法格式
使用path.extname()方法，可以获取路径中的扩展名部分，语法格式如下：

```
path.extname(path)
```

参数解读：
·path<string>必选参数，表示一个路径的字符串
·返回：<string>返回得到的扩展名字符串

2.path.extname()的代码示例
使用path.extname()方法，可以获取路径中的扩展名部分：

```
const fpath='/a/b/c/index.html'//路径字符串
const fext = path.extname(fpath)
console.log(fext)//输出，html
```

### 6.http模块

1.什么是http模块
回顾：什么是客户端、什么是服务器？
在网络节点中，负责消费资源的电脑，叫做客户端：负责对外提供网络资源的电脑，叫做服务器。
http模块是Node.js官方提供的、用来创建web服务器的模块，通过http模块提供的http.createServer()方法，就能方便的把一台普通的电脑，变成一台Web服务器，从而对外提供Web资源服务。
如果要希望使用http模块创建Web服务器，则需要先导入它：

```
 const http = require('http')
```

2.进一步理解http模块的作用
服务器和普通电脑的区别在于，服务器上安装了web服务器软件，例如：IlS、Apache等。过安装这些服务器软件，就能把一台普通的电脑变成一台web服务器。

在Node.js中，我们不需要使用IlS、Apache等这些第三方web服务器软件.因为我们可以基于Node.js提供的http模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供web服务.

3.服务器相关的概念

IP地址就是互联网上每台计算机的唯一地址，因此IP地址具有唯一性。如果把“个人电脑比作“一台电话”，那么IP地址“就相当于“电话号码“，只有在知道对方IP地址的前提下，才能与对应的电脑之间进行数据通信。

IP地址的格式：通常用“点分十进制"表示成(a.b.c.d)的形式，其中，a,b,c,d都是0~255之间的十进制整数。例如：用点分十进表示的P地址(192.168.1.1)

注意：
①互联网中每台Web服务器，都有自己的IP地址，如：大家可以在Windows的终端中运行ping www.baidu.com命令，即可查看到百度服务器的IP地址。

②在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方使测试，可以在自己的浏览器中输入127.0.0.1这个IP地址，就能把自己的电脑当做一台服务器进行访问了，

尽管IP地址能够唯一地标记网络上的计算机，但地址是一长串数字，不直观，而且不使于记忆，于是人们又发明了另一套**字符型**的地址方案，即所谓的域名(Domain Name)地t址。

IP地址和域名是一对应的关系，这份对应关系存放在一种叫做域名服务器(DNS,Domain name server)的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供IP地址和域名之间的转换服务的服务器。

注意：
①单纯使用IP地址，互联网中的电脑也能够正常工作，但是有了域名的加特，能让互联网的世界变得更加方便
②在开发测试期间，127.0.0.1 对应的域名足localhost,它们都代表我们自己的这台电脑，在使用效果上没有任何区别，

端口号
计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。

同样的道理，在一台电脑中，可以运行成有上千个web服务。每个web服务都对应一个唯一的口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的web服务进行处理。![image-20220501204858902](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220501204858902.png)

注意：
①每个端口号不能同时被多个web服务占用.
②在实际应用中，URL中的80端口可以被省路。

4.创建最基本的web服务器
1.创建web服务器的基本步骤
①导入http模块
②创建web服务器实例
③为服务器实例绑定request事件，监听客户端的请求
④启动服务器

4.导入http模块

步骤1-导入http模块
如果希望在自己的电脑上创建一个web服务器，从而对外提供web服务，则需要导入http模块：

```
const http = require('http')
```

步骤2-创建web服务器实例
调用http.createServer()方法，即可快速创建一个web服务器实例：

```
 const server = http.createServer()
```

步骤3-为服务器实例绑定request事件
为服务器实例绑定request事件，即可监听客户端发送过来的网络请求：

```JS
//使用服务器实例的，on()小方法，为服务器绑定一个request事件
server.on('request',(req,res)=>{
//只要有客户端来请求我们自己的服务器，就会继发request事件，从调用这个事件处理函数
console.log('Someone visit our web server.')
})
```

步骤4-启动服务器
调用服务器实例的.listen()方法，即可启动当前的web服务器实例：

```js
//调用server,1 isten(端口号，cb回调)方法，即可启动web服务器
server.listen(80,()=>{
console.log('http server running at http://127.0.0.1')
})
```

5.req请求对象
只要服务器接收到了客户端的请求，就会调用通过server.on()为服务器绑定的request事件处理函数，

如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：

```js
server.on('request',(req)=>
//res是请求对像，它包含了与客户端相关的数据和属性，例收如：
//req.url是客户端请求的URL地址
const url= req.url
//req.method是客户端的method请求类型
const method=req.method
const str =Your request url is ${req.url},and request method is ${req.method}
console.log(str)
})
```

6.res响应对像
在服务器的request事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下的方式：

```js
server.on('request',(req,res)=
//res是响应对家，它包含了与服务器相关的数据和属性，例如：要发送到客户端的字符串
const str =Your request url is s{req.url},and request method is s{req.method)
//res.end()方法的作用：
//向客户端发送指定的内容，并结束这次清求的处理过程
res.end(str)
})
```

7.解决中文乱码问题
当调用res.end()方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式：

```js
server.on('request',(req,res)=>{ 
//发送的内容包含中文
const str='您请求的url地址是$(req.url},请求的method类型是${req.method}
//为了防止中文显示乱码的问题，需要设置响应头Content-Type的值为text/html;charset=utf-8
res.setHeader('Content-Type','text/html;charset=utf-8')
//把泡含中文的内容，响应给客户端
res.end(str)
})
```

8.根据不同的url响应不同的html内容
1.核心实现步骤
①获取请求的u地址
②设置默认响应内容为404 Not found
③判断用户请求的是否为/或index.html首页
④判断用户请求的是否为/about.html关于页面
⑤设置Content-Type响应头，防止中文乱码
⑥使用res.end()把内容响应给客户端

2.动态响应内容

```js
server.on('request',function(req,res){
const url = req.url
//1.获取清求的ur1地址
let content='<h1>404 Not found!</h1>'//2.设置默认的内容为404 Not found
if (url ==='/'||url =='/index.html'){
content='<h1>首页</h1>'
//3.用户请求的是首页
}else if (url ==='/about.html'){
content='<h1>关于页面</h1>' //4.用户请求的是关于页面
}
res.setHeader('Content.-Type','text/html;charset:=utf-8')//5.设置Content-Type响应头，防止中文乱码
res.end(content)
//16.把内容发送给客户端
})
```

3.实现clock时钟的web服务器

把文件的实际存放路径，作为每个资源的请求url地址，**![image-20220502102121895](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502102121895.png)**

实现步骤
①导入需要的模块
②创建基本的web服务器
③将资源的请求url地址映射为文件的存放路径
④读取文件内容并响应给客户端
⑤优化资源的请求路径

步骤1·导入需要的模块

```js
1//1,1导入http模块
2 const http = require('http')
3//1.2导入fs文件系统模块
4 const fs = require('fs')
5//1.3导入path路径处理模块
6 const path = require('path')
```

步骤2-创建基本的web服务器

```js
1//2.1创键web服务器
2 const server = http.createServer()
3
4//2.2监听web服务器的request事件
5 server.on('request',function(req,res){})
6
7//2.3启动web服务器
8 server.listen(80,function(){
9 console.log('server listen at http://127.0.0.1')
10})
```

步骤3-将资源的请求u地址映射为文件的存放路径

```js
//3.1获取到客户端请求的ur1地址
const url =  req.url
//3.2把请求的u1地址，映射为本地文件的存放路径
const fpath = path.join(_dirname,url)
```

步骤4-读取文件的内容并响应给客户端

```js
//4,1根据“映射”过来的度件路径读取文件
fs.readFile(path,'utf8',(err,dataStr)=>{ 
//4,2读取文件失败后，向客户端响应回定的”错民消息”
if(err)return res.end('404 Not fount.')
//4.3读取文件成功后，将“读取成功的内客”响应给客户端
res.end(datastr)
})
```

步骤5-优化资源的请求路径

```js
//***将3.2的实现方式，改为如下代码：
//5.1预定义空白的文件存放路径
let fpath=''
if(url=='/'){
//5.2如果请求的路径是否为/，则手动指定文件的存放路径
fpath = path.join(dirname,'./clock/index.html'
}else{ 
//5.3如果请求的路径不为/，则动态拼接文件的存放路径
fpath = path.join(dirname,'./clock',url)
}
```

### 7.模块化

1.什么是模块化
模块化是指解决一个复杂问题时，自顶向下逐层把系统划份成若干模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元，

1.现实生活中的模块化

![image-20220502112827913](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502112827913.png)

2.编程领域中的模块化
编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。

把代码进行模块化拆分的好处：

1. 提高了代码的复用性
2. 提高了代码的可维护性
3. 可以实现按需加载

3.模块化规范
模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则，
例如：
1.使用什么样的语法格式来引用模块
2.在模块中使用什么样的语法格式向外暴露成员

模块化规范的好处：大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利已。

4.Node.js中模块的分类
1.Node.js中根据模块来源的不同，将模块分为了3大类。分别是：

1. 内置模块（内置模块是由Node.js官方提供的，例如fs、path、http等）
2. 自定义模块（用户创建的每个.js文件，都是自定义模块）
3. 第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载）

2.加载模块
使用强大的require()方法，可以加载需要的内置模块、用户自定义模块、第三方模进行使用。列如：

```js
//1,加截内置的fs模块
const fs = require('fs')
//2.加截用户的自定义模块不加后缀名也可以
const custom = require('./custom.js')
//3.加载第三方模块（关于第三方模块的下载和使用，会在后面的课程中进行专门的讲解）
const moment = require('moment')
```

注意：使用require()方法加载其它模块时，会执行被加载模块中的代码。

3.Node.js中的模块作用域
1.什么是模块作用域
和函数作用域类似，在自定义榄块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的问限制，叫做模快作用域。

![image-20220502114546596](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502114546596.png)

2.模块作用域的好处
防止了全局变量污染的问题![image-20220502114708283](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502114708283.png)

4.向外共享模块作用域中的成员
1.module对象
在每个js自定义模块中都有，一个module对橡，它里面存储了和当前模块有关的信息，打印如下：![image-20220502115417205](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502115417205.png)

2.module.exports对象

在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。

外界用require()方法导入自定义模块时，得到的就是module.exports所指向的对象。

```
// 在一个自定义模块中，默认情况下， module.exports = {}
const age = 20
// 向 module.exports 对象上挂载 username 属性
module.exports.username='zs'
// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayhello=function(){
	console.log('hello')
}
module.exports.age=age
```

3.共享成员时的注意点
使用require()方法导入模块时，导入的结果，永远以module.exports指向的对象为准。

![image-20220502121055417](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502121055417.png)

4.向外共享模块作用域中的成员
1.exports对象

由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。默认情况下，exports和module.exports指向同一个对象。最终共享的结果，还是以module.exports指向的对象为准，

![image-20220502164433111](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502164433111.png)

最终，向外共享的结果，永远都是 module.exports 所指向的对象

2.exports和nodule.exports的使用误区
时刻谨记，require()模块时，得到的永远是module.exports指向的对象：

![image-20220502165238138](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502165238138.png)

![image-20220502165507343](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502165507343.png)

![image-20220502165658129](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502165658129.png)

![image-20220502170100818](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502170100818.png)

注意：为了防止混乱，建议大家不要在同一个模块中同时使用exports和module.exports

5.Node.js中的模块化规范
Node.js遵循了CommonJS模块化规范，CommonJS规定了模块的特性和各模块之问如何相互依赖，

CommonJS规定：
①每个模块内部，module变显代表当前模块，
②module变量是一个对象，它的exports属性（即module.exports)是对外的接口.
③加载某个模块，其实是加载该模块的module.exports属性。require()方法用于加载模块。

### 8.npm和包

1.npm和包

1.Node.js中的第三方模块又叫做包。
就像电脑和计算机指的是相同的东西，第三方模块和包指的是同一个概念，只不过叫法不同。

2.包的来源
不同于Node.js中的内置模块与自定义模块，包是由第三方个人或队开发出来的，免费供所有人使用。

注意：Node.js中的包都是免费目开源的，不需要付费即可免费下载使用.

3.为什么需要包
由于Node.js的内置模块仅提供了一些底层的API,导致在基于内置模块进行项目开发的时，效率很低
**包是基于内置模块封装出来的**，提供了更高级、更方使的API,**极大的提高了开发效率。**

包和内置模块之间的关系，类似于jQuery和浏览器内置API之间的关系。

4.从哪里下载包

国外有一家IT公司，叫做npm,Inc.这家公可旗下有一个非常著名的网站(https://www.npmjs.com/),它是全球最大的包共享平台，你可以从这个网站上搜索到任何你需要的包，只要你有足的耐心！

到目前未知，全球约1100多万的开发人员，通过这个包共享平台，开发并共享了超过120多万个包供我们使用。

npm,lnc.公司提供了一个地址为http://registry.npmjs.org的服务器来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包

5.如何下载包

npm,Inc.公司提供了一个包管理工具，我们可以使用这个包管理工具，从http://registry.npmjs.org服务器把需要的包下载到本地使用。

这个包管理工具的名字叫做Node Package Manager(简称npm包首理工具)，这个包管理工具随着Node.js的安装包一起被安装到了用户的电脑上。

大家可以在终端中执行npm -v命令，来查看自己电脑上所安装的npm包首理工具的版本号：![image-20220502185137526](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502185137526.png)

2.npm初体验
1.格式化时间的传统做法

![image-20220502192453215](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502192453215.png)

1. 创建格式化时间的自定义模块

2. 定义格式化时间的方法
3. 创建补零函数
4. 从自定义模块中导出格式化时间的函数
5. 导入格式化时间的自定义模块
6. 调用格式化时间的函数

2.格式化时间的高级做法

①使用npm包管理工具，在项目中安装格式化时间的包moment
②使用require(）导入格式化时间的包
③参考moment的官方API文档对时间进行格式化

```js
//1,导入moment包
const moment = require('moment')
//2.参考moment官方API文档，调用对应的方法，对时间进行格式化
//2.1调用moment()方法，得到当的时间
//2.2针对当前的时间，调用format()方法，按照指的格式进行时间的格式化
const dt =moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)//输出2020-01-1217：23：48
```

3.在项目中安装包的命令
如果想在项目中安装指定名称的包，需要运行如下的命令：

```
npm install 包的完整名称
```

上述的装包命令，可以简写成如下格式：

```
npm i 包的完整名称
```

注意导入的名称就是安装包时候的名称

具体教程详见[瞬间.js |文档 (momentjs.com)](https://momentjs.com/docs/)

4.初次装包后多了哪些文件
初次装包完成后，在项目文件夹下多一个叫做node_modules的文件夹和package-lock.json的配置文件。

其中：
node_modules**文件夹用来存放所有已安装到项目中的包**。require()导入第三方包时，就是从这个目录中查找并加载包。
package-lock.json配置文件用来**记录node_modules目录下的每一个包的下载信息**，例如包的名字、版本号、下载地址等。

注意：程序员不要手动修改node_modules或package-lock.json文件中的任何代码，npm包管理工具会自动维护它们。

5.安装指定版本的包

默认情况下，使用npm install命令安装包的时候，会自动安装最新版本的包。如果需要安装指定版本的包，可以在包名之后，通过@符号指定具体的版本，例如：

```
npm i moment@2.22.2
```

6.包的语义化版本规范
包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如2.24.0

其中每一位数字所代表的的含义如下：
第1位数字：大版本
第2位数字：功能版本
第3位数字：Bug修版本

版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零。



3.包管理配置文件

npm规定，在项目根目录中，必须提供一个叫做packāge.json的包管理配置文件。用来记录与项目有关的一些配置信息。例如：

●项目的名称、版本号、描述等
●项目中都用到了哪些包
●那些包只在开发期间会用到
●那些包在开发和部署时都需要用到

1.多人协作的问题![image-20220502202126513](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502202126513.png)

整个项目的体积是30.4M
第三方包的体积是28.8M
项目源代码的体积1.6M
遇到的问题：第三方包的体积过大，不方使团队成员之间共亨项目源代码。

解决方案：共享时删除node_modules

2.如何记录项目中安装了那些包

在项目根目录中，创建一个叫做package.json的配置文件，即可用来记录项目中安装了哪些包。从而方使剔除node_modules目录之后，在团队成员之间共享项目的源代码。

注意：今后在项目开发中，定要把node_modules文件夹，添加到.gitignore忽略文件中。

3.快速创建package.json
npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建package.json这个包管理配置文件：

```
//作用：在执行命令所处的日录中，快速新建package.json文件
npm init -y
```

注意：
①上述命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。
②运行npm install命令安装包的时候，npm包管理工具会自动把包的名称和版本号，记录到package.json中。

一般项目在刚开始的时候就创建package.json文件

4.dependencies节点

![image-20220502203608178](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220502203608178.png)

package.json文件中，有一个dependencies节点，专门用来记录您使用npm install
命令安装了那些包。

5.一次性安装所有的包
当我们拿到一个剔除了node_modules的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来。否则会报类以于下面的错误：

```
//由于项目运行依赖于moment这个包，如果没有提前安装好这个包，就会报如下的错误：
Error:Cannot find module 'moment'
```

可以运行npm install命令（成npm i)一次性安装所有的依赖包：

```
//执行npm install命令时，npm包管理工具会先读取package.json中的dependencies节点，
//读取到记录的所有依赖包名称和版本号之后，npm包管理工具会把这些包一次性下载到项目中
npm install
```

6.卸载包
可以运行npm uninstall命令，来卸指定的包：

```
//使用npm uninstall 具体的包名来卸载包
npm uninstall moment
```

注意：npm uninstall命令执行成功后，会把卸载的包，自动从package.json的dependencies中移除掉。

7.devDependencies节点
如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies节点中。

与之对应的如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到dependencies节点中

您可以使用如下的命令，将包记录到devDependencies节点中：

```
//安装指定的包，并记录到devDependencies节点中
npm i 包名 -D
//注意：上述命令是简写形式，等价于下面完整的写法：
npm install 包名 --save-dev
```

包名 和  save-dev参数顺序不重要

4.解决下包速度慢的问题
1.为什么下包速度慢

在使用npm下包的时候，默认从国外的https://registry.npmjs,org/服务器进行下载，此时，网络数据的传输需要经过浸长的海底光缆，因此下包速度会很慢。

2.淘宝NPM镜像服务器

淘宝在国内搭建了一个服务器，专门把国外官方服务器上的包同步到国内的服务器，然后在国内提供下包的服务。从而极大的提高了下包的速度。

扩展：
镜像(Mirroring)是一种文件存储形式，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像。

3.切换npm的下包镜像源

下包的镜像源，指的就是下包的服务器地址。

```
#查看当前的下包镜像源
npm config get registry
#将包的镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/
#检查镜像源是否下载成功
npm config get registry
```

4.nrm

为了更方使的切换下包的镜像源，我们可以安装**nrm**这个小工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源。

```
#通过npm包管理器，将nrm安装为全局可用的工具
npm i nrm -g
#查看所有可用的镜像源
nrm ls
#将下包的镜像源切换为taobao镜像
nrm use taobao
```

5.包的分类

使用npm包管理工具下我的包，共分为两大类，分别是：

1.项目包

那些被安装到项目的node_modules目录中的包，都是项目包。

项目包又分为两类，分别是：
·开发依赖包（被记录到devDependencies节点中的包，只在开发明间会用到）
·核心依赖包（被记录到dependencies节点中的包，在开发明间和项目上线之后都会用到）

```
npm i 包名 -D
#开发依赖包（会被记录到devDependencies节点下）
npm i 包名
#核心依赖包（会被记录到dependencies节点下)
```

2.全局包
在执行npm install命令时，如果提供了-g参数，则会把包安装为全局包

全局包会被安装到C:\Users\用户目录\AppData\Roaming\npm\node_modules目录下。

```
npm i 包名 -g
#全局安装指定的包
npm uninstall 包名 -g
#卸载全局安装包
```

注意：
①只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令。
②判断某个包是否需要全局安装后才能使用，可以参者官方提供的使用说明即可。

3.i5ting_toc

i5ting_toc是一个可以把md文档转为html页面的小工具，使用步案如下：

```
#将i5ting_toc安装为全局包
npm install -g i5ting_toc
#调用i5ting_toc,轻松实现md转html的功能
i5ting_toc -f 要转换的md文件路径 -o
```

6.规范的包结构
在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下包的内部结构。
一个规范的包，它的组成结构，必须符合以下3点要求：
①包必须以单独的目录而存在
②包的顶级日录下要必须包含package.json这个包管理配置文件
③package.json中必须包含name,version,main这三个属性，分别代表包的名字、版本号、包的入口.

注意：以上3点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考网络

7.开发属于自己的包
1.需要实现的功能

1. 格式化日期
2. 转义HTML中的特殊字符
3. 还原HTML中的特殊字符

```js
//1.导入自己的包
const itheima = require('itehima-utils')
//----功能1：格式化日期-----
const dt = itheima.dateFormat(new Date())
//输出2020-01-2010：09：45
console.log(dt)
```

```js
//1.导入自己的包
const itheima require('itehima-utils')
//-----功能2：转义HTML中的特殊字符-----
const htmlStr='<h1 style="color:red;">你好！&copy;<span>小黄！</span><h1>'
const str = itheima.htmlEscape(htmlStr)
//&lt;h1 style=&quot;color:red;&quot;&gt;你好！&amp;copy:&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt:
console.log(str)
```

```js
//1.导入自己的包
const itheima = require('itehima-utils')
//------功能3：还原HTML中的特殊字符----
const rawHTML = itheima.htmlUnEscape(str)
//输出<h1 style="color:ed;">你好！&copy;<span>小黄！</span></h1>
console.log(rawHTML)
```

2.初始化包的基本结构

①新建itheima-tools文件夹，作为包的根目录
②在itheima-tools文件夹中，新建如下三个文件：
		package.json(包管理配置文件)
		index.js(包的入口文件)
		README.md(包的说明文档）

3.初始化package.json

```
"name":"itheima-tools",
"version":"1.0.0",
"main":"index.js",
"description":"提供了格式化时间，HTMLEscape的功能"，
"keywords":["itheima","dateFormat","escape"],
"license":"ISC"
```

main的作用require调用的时候如果有package.json文件就会去找main指向的文件

4.在index,js中定义格式化时间的方法

```js
//格式化时间的方法
function dateFormat(dateStr){
	const dt=new Date(dateStr)
	const y=padZero(dt.getFullYear())
	const m=padZero(dt.getMonth()+1)
	const d=padZero(dt.getDate())
	const hh=padZero(dt.getHours())
	const mm=padZero(dt.getMinutes())
	const ss=padZero(dt.getSeconds())
	
	// return 'YYYY-MM-DD HH:mm:ss'
	return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
//1补零的方法
function padZero(n){
	return n>9 ? n:'0'+n
}
module.exports ={ 
daterormat
}
```

5.在index.js中定义转义HTML的方法

```js
function htmlEscape(htmlstr){
	return htmlstr.replace(/<|>|"|&/g,(match)=>{
		switch(match){
			case'<':
				return'&lt;'
			case'>':
				return'&gt;'
			case '"':
				return '&quot;'
			case '&':
				return '&amp;'
		}
	})
}
```

6.在index,js中定义还原HTML的方法

```
function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}
```

测试

```
const itheima=require('./itheima-tools')
//格式化时间
// const dtstr=itheima.dateFormat(new Date())
// console.log(dtstr)

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str=itheima.htmlEscape(htmlStr)
console.log(str)

const str2 = itheima.htmlUnEscape(str)
console.log(str2)
```

7.将不同的功能进行模块化拆分

①将格式化时间的功能，拆分到src->dateFormat.js中
②将处理HTML字符串的功能，拆分到src->htmlEscape.js中
③在index.js中，导入两个模块，得到需要向外共享的方法
④在index.js中，使用module.exports把对应的方法共享出去

8.编写包的说明文档

包根目录中的README.md文件，是包的使用说明文档。通过它，我们可以事先把包的使用说明，以markdown的格式写出来，方使用户参考。

README文件中具体写什么内容，没有强制性的要求；只要能够清晰浙地把包的作用、用法、注意事项等描述清楚即可

我们所创建的这个包的README.md文档中，会包含以下6项内容：
安装方式、导入方式、格式化时间、转义HTML中的特殊字符、还原HTML中的特殊字符、开源协议

9.发布包
1.注册npm账号

①访问https://www.npmjs.com/网站，点击sign up按扭，进入注册用户界面
②填写账号相关的信息：Full Name、Public Email、.Username、Password
③点击Create an Account按钮，注册账号登录邮箱，点击验证链接，进行账号的验证

2.登录npm账号
npm账号注册完成后，可以在终端中执行npm login命令，依次输入用户名、密码、邮箱后，即可登录成功。

注意：在运行npm login命冷之前，必须先把下包的服务器地址切换为npm的官方
服务器。否则会导致发布包失败！

![image-20220503160640609](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220503160640609.png)

成功

10.发布包
1.把包发布到npm上
将终端切换到包的根目录之后，运行npm publish命令，即可将包发布到npm上（注意：包名不能街同）。

![image-20220503160801817](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220503160801817.png)

2.删除已发布的包

运行npm unpublish 包名 -force 命令，即可从npm删除已发布的包。

![image-20220503161105209](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220503161105209.png)

1. npm unpublish命令只能除72小时以内发布的包
2. npm unpublish删除的包，在24小时内不允许重复发布
3. 
   发布包的时候要慎重，尽量不要往npm上发布没有意义的包！
   

### 9.模块的加载机制

1.优先从缓存中加载
模块在第一次幼加载后会被缓存.这也意味看多次调用require()不会导致模块的代码被执行多次。

注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优洗从缓存中加载，从而提高模块的加载效率

2.内置模块的加载机制
内置模块是由Node.js官方提供的模块，内置模块的加载优先级最高。

例如，require('fs')始终返回内置的fs模，即使在node_modules目录下有名字相同的包也叫做fs.

3.自定义模块的加载机制
使用require()加载自定义模块时，必须指定以./或../开头的路径标识符。在加我自定义模块时，如果设有指定./或../这样的路径标识符，则node会把它当作内置模块或第三方模块进行加载

同时，在使用require()导入自定义模块时，如果省略了文件的扩展名，则Node.js会按顺序分别尝试加截以下的文件：

1. 按照确切的文件名进行加载
2. 补全js扩展名进行加载
3. 补全json扩展名进行加载
4. 补全.node扩展名进行加载
5. 加载失败，终端报错

4.第三方模块的加载机制
如果传递给require(）的模块标识符不是一个内置模块，也设有以 ./或../开头，则Node.js会从当前模块的父目录开始，尝试从node_modules文件夹中加载第三方模块。

**如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载。直到文件系统的根目录，**

例如，假设在'C:\Users\itheima\project\foo.js'文件里调用了require('tools'),则Node.js会按以下顺序查找：

1. C:\Users\itheima\\project\\**node_modules**\tools
2. C:\Users\itheima\\**node_modules**\tools
3. C:\Users\\**node_modules**\tools
4. C:\\**node_modules**\tools
5. 如果没有直接报错

5.目录作为模块
当把目录作为模块标识符，传递给require()进行加载的时候，有三种加截方式：

①在被加载的目录下查找一个叫做package.json的文件，并寻找main属性，作为require加载的入口
②如果目录里没有package.json文件，或者main入口不存在或无法解析，则Node.js将会试图加截目录下的index.js文件.
③如果以上两步都失败了，则Node.js会在终端打印错误消息，报告模块的缺失：Error:Cannot find module'Xx

### 10.express

