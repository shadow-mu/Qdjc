# git

### 1.文件的版本控制

1.问题![image-20220428194850813](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220428194850813.png)

2.版本控制软件![image-20220428195116524](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220428195116524.png)

3.版本控制软件的好处

![image-20220428195225867](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220428195225867.png)

4.版本控制系统

![image-20220428195553420](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220428195553420.png)

1.本地版本控制系统

特点：

使用软件来记录文件的不同版本，提高了工作效率，降低了手动维护版本出错率

缺点：

1. 单机运行，不支持多人协作开发
2. 版本数据故障后，所有历史更新记录会丢失

2.集中化的版本控制系统

特点：

基于服务器，客户端的运行模式

1. 服务器保存文件所以更新记录
2. 客户端只保留最新的文件版本

优点：联网运行，支持多人协作开发

缺点

1. 不支持离线提交更新版本
2. 中心服务器崩溃后，所有人无法工作
3. 版本数据库故障后，所以历史更新记录会丢失

典型代表 AVN

3.分布式版本控制系统

特点：基于服务器，客户端的运行模式

1. 服务器保存文件的所以更新版本
2. 客户端是服务器的完整版本，并不是只保留文件的最新版本

优点

1. 联网运行，支持多人协作开发
2. 客户端断网后支持离线本地提交版本更新
3. 服务器故障或损坏后，可使用任何一个客户端的备份进行提交数据

典型代表：Git

### 2.什么是Git

Git是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。

特点：项目越大越复杂，协同开发者越多，越能体现出Git的高性能和高可用性！

Git的特性
Git之所以快速和高效，主要依赖于它的如下两个特性：

1. 直接记录快照，而非差异比较
2. 近乎所有操作都是本地执行

传统的版本控制系统（例如SVN)是基于差异的版本控制，它们存储的是一组基本文件和每个文件随时间逐步累积的差异。

1.Git快照:是在原有文件版本的基础上重新生成一份新的文件，类似于备份。为了效率，如果文件没有修改，Git不再重新存储该文件，而是只保留一个链接指向之前存储的文件。

缺点：占用磁盘空间较大
优点：版本切换时非常快，因为每个版本都是完整的文件快照，切换版本时直接恢复目标版本的快照即可。
特点：空间换时间

2.近乎所有操作都是本地执行

在Gt中的绝大多数操作都只需要访问本地文件和资源，一般不需要来自网络上其它计算机的信息。

特性：

1. 断网后依旧可以在本地对项目进行版本管理
2. 联网后，把本地修改的记录同步到云端服务器即可

3.Git中的三个区域

使用Git管理的项目，拥有三个区域，分别是工作区、暂存区、Git仓库。

4.Git中的三种状态

已修改
表示修改了文件，但还没将修改的结果放到暂存区

已暂存
表示对已修改文件的当前版本做了标记，使之包含在下次提交的列表中

已提交
表示文件已经安全地保存在本地的Git仓库中

注意：

1. 工作区的文件被修改了，但还没有放到暂存区，就是已修改状态。
2. 如果文件已修改并放入暂存区，就属于已暂存状态。
3. 如果Gt仓库中保存着特定版本的文件，就属于已提交状态。

5.基本的Git工作流程

基本的Git工作流程如下：

1. 在工作区中修改文件
2. 将你想要下次提交的更改进行暂存
3. 提交更新，找到暂存区的文件，将快照永久性存储到Git仓库

### 3.安装并配置Git

1.在Windows中下载并安装Git
在开始使用Gt管理项目的版本之前，需要将它安装到计算机上。可以使用览器访问如下的网址，根据自己的操作系统，选择下载对应的Gt安装包：
https://git-scm.com/downloads

安装过程中一直Next就可以

2.配置用户信息

安装完Git之后，要做的第一件事就是设置自己的用户名和邮件地址。因为通过Git对项目进行版本管理的时候，Git需要使用这些基本信息，来记录是谁对项目进行了操作：

```git
1 git config --global user.name "itheima"
2 git config --global user.email "itheima@itcast.cn"
```

注意：如果使用了--global选项，那么该命令只需要运行一次，即可永久生效。

3.Git的全局配置文件

通过git config --global user.name和git config --global user.email配置的用户名和邮箱地址，会被写入到C:/Users./用户名文件夹/.gitconfig文件中。这个文件是Git的全局配置文件，配置一次即可永久生效。

可以使用记事本打开此文件，从而查看自己曾经对Git做了哪些全局性的配置。

4.检查配置信息

除了使用记事本查看全局的配置信息之外，还可以运行如下的终端命令，快速的查看Gt的全局配置信息：

```git
1#查看所有的全局配置项
2 git config --list --global
3#查看指定的金局配置项
4 git config user.name
5 git config user.email
```

5.获取帮助信息

可以使用git help<verb>命令，无需联网即可在浏览器中打开帮助手册，例如：

```git
1#要想打开git config命令的帮助手册
2 git help config
```

如果不想查看完整的手册，那么可以用-h选项获得更简明的“help”输出：

```git
1#想要获取git config命令的快速参考
2 git config -h
```

### 4.Git的基本操作

1.获取Gt仓库的两种方式
①将尚未进行版本控制的本地目录转换为Git仓库
②从其它服务器克隆一个已存在的Git仓库
以上两种方式都能够在自己的电脑上得到一个可用的Git仓库

2.在现有目录中初始化仓库
如果自己有一个尚未进行版本控制的项目目录，想要用Gt来控制它，需要执行如下两个步骤：
①在项目目录中，通过鼠标右键打开“Git Bash”
②执行git init命令将当前的目录转化为Git仓库
git init命令会创建一个名为.git的隐藏目录，这个.git目录就是当前项目的Git仓库，里面包含了初始的必要文件，这些文件是Gt仓库的必要组成部分。

```
1. git init
```

成功提示

![image-20220429155449137](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429155449137.png)

3.工作区中文件的4种状态
工作区中的每一个文件可能有4种状态，这四种状态共分为两大类，如图所示：![image-20220429155723031](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429155723031.png)

Git操作的终极结果：让工作区中的文件都处于“未修改”的状态。

4.检查文件的状态
可以使用git status命令查看文件处于什么状态，例如：

![image-20220429160128189](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429160128189.png)

在状态报告中可以看到文件出现在Untracked files(未跟踪的文件)下面。

未跟踪的文件意味着Git在之前的快照（提交）中没有这些文件；Git不会自动将之纳入跟踪范围，除非明确地告诉它“我需要使用Git跟踪管理该文件”

5,以精简的方式显示文件状态
使用git status输出的状态报告很详细，但有些繁琐。如果希望以精简的方式显示文件的状态，可以使用如下两条完全等价的命令，其中-s是-shot的简写形式：

```
1#以精简的方式显示文件状态
2 git status -s
3 git status --short
```

未跟踪文件前面有红色的？标记，例如：![image-20220429160503614](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429160503614.png)

6.跟踪新文件
使用命令git add开始跟踪一个文件。所以，要跟踪index.html文件，运行如下的命令即可：

```
1 git add vue
```

此时再运行git status命令，会看到index.html文件在Changes to be committed这行的下面，说明已被跟踪，并处于暂存状态：![image-20220429193705173](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429193705173.png)

![image-20220429193800329](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429193800329.png)

7.提交更新
现在暂存区中有一个文件等待被提交到Git仓库中进行保存。可以执行git commit命令进行提交，其中-m选项后面是本次的**提交消息**，用来**对提交的内容做进一步的描述**：

```
1 git commit-m"提交描述"
```

![image-20220429194737780](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429194737780.png)

证明工作区中所有的文件都处于“未修改”的状态，没有任何文件需要被提交。

8.对已提交的文件进行修改
目前，文件已经被Git跟踪，并且工作区和Git仓库中的文件内容保持一致。当我们修改了工作区中文件的内容之后，再次运行git status和git status-s命令，会看到如下的内容：

![image-20220429195017397](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429195017397.png)

**文件index.html出现在Changes not staged for commit这行下面，说明已跟踪文件的内容发生了变化，
但还没有放到暂存区。
注意：修改过的、没有放入暂存区的文件前面有红色的M标记。**

9.暂存已修改的文件
目前，工作区中的index.html文件已被修改，如果要暂存这次修改，需要再次运行git add命令，这个命令是个多功能的命令，主要有如下3个功效：
①可以用它开始跟踪新文件
②把已跟踪的、且已修改的文件放到暂存区
③把有冲突的文件标记为已解决状态

![image-20220429195626349](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429195626349.png)

10.提交已暂存的文件
再次运行git commit-m"提交消息"命令，即可将暂存区中记录的index.html的快照，提交到Git仓库中进行保存：![image-20220429195940317](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429195940317.png)

![image-20220429200228822](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429200228822.png)

11.撤销对文件的修改
撤销对文件的修改指的是：把对工作区中对应文件的修改，还原成Gt仓库中所保存的版本。操作的结果：所有的修改会丢失，且无法恢复！危险性比较高，请慎重操作！

![image-20220429200501582](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429200501582.png)

```
1 git checkout--撤销的文件
```

撤销操作的本质：用Git仓库中保存的文件，覆盖工作区中指定的文件

12.向暂存区中一次性添加多个文件
如果需要被暂存的文件个数比较多，可以使用如下的命令，一次性将所有的新增和修改过的文件加入暂存区：

```
1 git add.
```

今后在项目开发中，会经常使用这个命令，将新增和修改过后的文件加入暂存区。

13.取消暂存的文件
如果需要从暂存区中移除对应的文件，可以使用如下的命令：

```
1 git reset HEAD要移除的文件名称
2 git reset HEAD .  //移除所以的文件
```

14.跳过使用暂存区域
Git标准的工作流程是工作区→暂存区→Git仓库，但有时候这么做略显繁琐，此时可以跳过暂存区，直接将工作区中的修改提交到Git仓库，这时候Git工作的流程简化为了工作区→Git仓库。

Git提供了一个跳过使用暂存区域的方式，只要在提交的时候，给git commit加上-a选项，Git就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过git add步骤：

```
1 git commit-a-m"描述消息"
```

15.移除文件
从Gt仓库中移除文件的方式有两种：
①从Gt仓库和工作区中同时移除对应的文件
②只从Gt仓库中移除指定的文件，但保留工作区中对应的文件

```
1#从Git仓库和工作区中同时移除index,js文件
2 git rm -f index.js
3#只从Git仓库中移除index,css,但保留工作区中的index.css文件
4 git rm --cached index.css
```

16.忽略文件
一般我们总会有些文件无需纳入Git的管理，也不希望它们总出现在未跟踪文件列表。在这种情况下，我们可以创建一个名为.gitignore的配置文件，列出要忽略的文件的匹配模式。

文件.gitignore的格式规范如下：
①以#开头的是注释
②以/结尾的是目录
③以/开头防止递归
④以!开头表示取反
⑤可以使用glob模式进行文件和文件夹的匹配(glob指简化了的正则表达式)

17.glob模式
所谓的glob模式是指简化了的正则表达式：
①星号*匹配零个或多个任意字符
②[abc]匹配任何一个列在方括号中的字符（此案例匹配一个a或匹配一个b或匹配一个c)
③问号？只匹配一个任意字符
④在方括号中使用**短划线**分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如[0-9]表示匹配所有0到9的数字)
⑤两个星号*表示匹配任意中间目录（比如a/*/z可以匹配a/z、a/b/z或a/b/c/z等）

18..gitignore文件的例子

```
1#忽路所有的.a文件
2*.a
3
4#但跟踪所有的!lib,a,即便你在前面忽略了.a文件
5 !lib.a
6
7#只忽路当前目录下的TCD0文件，而不忽略其他目录subdir./TOD0
8/TCD0
9
10#忽路在任何目录下名为build的文件夹
11 build/
12
13#忽路doc/notes.txt所以doc目录下所以,但不忽略子目录下		    	#doc/scrver/arch.txt
14 doc/*.txt
15
16#忽略doc/目承及其所有子目承下的.pdf文件
17 doc/**/*.pdf
```

19.查看提交历史
如果希望回顾项目的提交历史，可以使用gtog这个简单且有效的命令。

```
1#按时间先后顺序列出所有的提交历史，最近的提交排在最上面
2 git log
3
4#只展示最新的两条提交历史，数字可以按需进行填写
5 git log -2
6
7#在一行上展示最近两条提交历史的信息
8 git log -2 --pretty=oneline
9
10#在一行上展示最近两条提交历史的信息，并自定义输出的格式
11#h提交的简写哈希值 %anf作者名字%ar作者修订日期，按多久以前的方式显示 %s提交说明
12 git log -2 --pretty=format:"%h |%an| %gitar| %s"
```

20.回退到指定的版本

```
1#在一行上展示所有的提交历史
2 git log --pretty=oneline
3
4#使用git reset--hard命令，根据指定的提交ID回退到指定版本
5 git reset --hard <CommitID>
6
7#在旧版本中使用git reflog--pretty-oneline命令，查看命令操作的历史git log --pretty=oneline不好使了
8 git reflog --pretty=oneline
9
10#再次根招最新的提交ID,跳转到最新的版木
11 git reset --hard <CommitID>


```

### 5.小结

1.初始化Git仓库的命令
git init
2.查看文件状态的命令
git status 或 git status -s
3.一次性将文件加入暂存区的命令
git add
4.将暂存区的文件提交到Gt仓库的命令
git commit-m"提交消息"

### 6.Github

1.开源的概念

![image-20220429212747290](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220429212747290.png)

2.什么是开源许可协议
开源并不意味若完全没有限制，为了限制使用者的使用范围和保护作者的权利，每个开源项目都应该遵守开源许可协议(Open Source License)。

3.常见的5种开源许可协议

1. BSD (Berkeley Software Distribution
2. Apache Licence 2.0
3. **GPL** (GNU General Public License)
4. LGPL (GNU Lesser General Public License
5. **MIT** (Massachusetts Institute of Technology,MIT)

**GPL**具有传染性的一种开源协议，不允许修改后和衍生的代码做为闭源的商业软件发布和销售
使用GPL的最著名的软件项目是：Linux

**MIT** 是目前限制最少的协议，唯一的条件：在修改后的代码或者发行包中，必须包含原作者的许可信息
使用**MIT** 的软件项目有jquery、Node,js

4.为什么要拥抱开源
开源的核心思想是“我为人人，人人为我”，人们越来越喜欢开源大致是出于以下3个原因：
①开源给使用者更多的控制权
②开源让学习变得容易
③开源才有真正的安全
开源是软件开发领域的大趋势，拥抱开源就像站在了巨人的肩膀上，不用自己重复造轮子，让开发越来越容易。

5.开源项目托管平台
专门用于免费存放开源项目源代码的网站，叫做开源项目托管平台。目前世界上比较出名的开源项目托管平台主要有以下3个：
●Github(全球最牛的开源项目托管平台，没有之一)】
●Gitlab(对代码私有性支持较好，因此企业用户较多)
●Gitee(又叫做码云，是国产的开源项目托管平台。访问速度快、纯中文界面、使用友好)
注意：以上3个开源项目托管平台，只能托管以Git管理的项目源代码，因此，它们的名字都以Git开头。

6.什么是Github
Github是全球最大的开源项目托管平台。因为只支持Git作为唯一的版本控制工具，故名GitHub。在Github中，你可以：
①关注自己喜欢的开源项目，为其点赞打call
②为自己喜欢的开源项目做贡献(Pull Request)
③和开源项目的作者讨论Bug和提需求(Issues)
④把喜欢的项目复制一份作为自己的项目进行修改（fork)
⑤创建属于自己的开源项目
⑥etc..

### 7.远程仓库的使用

1.基于HTTPS将本地仓库上传到Github

![image-20220430155524011](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430155524011.png)

第二次提交

```
git push
```

2.SSH key

SSH key的作用：实现本地仓库和Github之间免登录的加密数据传输。
SSH key的好处：免登录身份认证、数据加密传输。
SSH key由两部分组成，分别是：
①id rsa(私钥文件，存放于客户端的电脑中即可)
②id_rsa.pub(公钥文件，需要配置到Github中)

3.生成SSHkey
①打开Git Bash
②粘贴如下的命令，并将your_email(@example.com替换为注册Github账号时填写的邮箱：

```
ssh-keygen -t rsa -C "你的邮箱"
```

③连续敲击3次回车，即可在C:Users\用户名文件夹\.ssh目录中生成id rsa和id_rsa.pub两个文件

配置SSH key
①使用记事本打开id rsa.pub文件，复制里面的文本内容
②在浏览器中登录Github,点击头像->Settings->SSH and GPG Keys->New SSH key
③将id rsa.pub文件中的内容，粘贴到Key对应的文本框中
④在Title文本框中任意填写一个名称，来标识这个Key从何而来

方法2输入 clip < ~/.ssh/id_rsa.pub  会自动复制ssh key，可以直接粘贴

4.检测Github的S5Hkey是否配置成功
打开Git Bash,输入如下的命令并回车执行：

```
1 ssh -T git@github.com
```

上述的命令执行成功后，可能会看到如下的提示消息：

![image-20220430162017766](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430162017766.png)

输入yes之后，如果能看到类似于下面的提示消息，证明SSH key已经配置成功了：![image-20220430162042730](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430162042730.png)

5.基于SSH将本地仓库上传到Github

```
1、git init  
2、git add .
3、git commit -m "提交描述"
4、git remote add origin https://github.com/MyJoanna/test.git  （这里的 https://github.com/MyJoanna/test.git 是你的仓库地址）
```

![image-20220430174454303](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430174454303.png)

6.将远程仓库克隆到本地打开Git Bash,输入如下的命令并回车执行：

```
1 git clone远程仓库的地址
```

![image-20220430174718302](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430174718302.png)

### 8.Git 分支

1.分支的概念
分支就是科幻电影里面的平行宇宙，当你正在电脑前努力学习Git的时候，另一个你正在另一个平行宇宙里努力学习SVN。

如果两个平行宇宙互不干扰，那对现在的你也没啥影响。
不过，在某个时间点，两个平行宇宙合并了，结果，你既学会了Git又学会了SVN!

2.分支在实际开发中的作用
在进行多人协作开发的时候，为了防止互相干扰，提高协同开发的体验，建议每个开发者都基于分支进行项目功能的开发，例如：

![image-20220430175158568](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430175158568.png)

3.master主分支
在初始化本地Git仓库的时候，it默认已经帮我们创建了一个名字叫做master的分支。通常我们把这个master分支叫做主分支。

在实际工作中，master主分支的作用是：用来保存和记录整个项目已完成的功能代码。
因此，不允许程序员直接在master分支上修改代码，因为这样做的风险太高，容易导致整个项目崩溃。

4.功能分支
由于程序员不能直接在master分支上进行功能的开发，所以就有了功能分支的概念。
功能分支指的是专门用来开发新功能的分支，它是临时从aster主分支上分叉出来的，当新功能开发且测试完毕后，最终需要合并到master主分支上，如图所示：

![image-20220430175840056](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430175840056.png)

5.查看分支列表
使用如下的命令，可以查看当前Gt仓库中所有的分支列表：

```
1 git branch
```

运行的结果如下所示：

![image-20220430180120012](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430180120012.png)

注意：分支名字前面的号表示当前所处的分支。

6.创建新分支
使用如下的命令，可以基于当前分支，创建一个新的分支，此时，新分支中的代码和当前分支完全一样：

```
1 git branch 分支名称
```

![image-20220430180354242](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430180354242.png)

7.切换分支
使用如下的命令，可以切换到指定的分支上进行开发：

```
git checkout 分支名字
```

![image-20220430182036706](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430182036706.png)

8.分支的快速创建和切换
使用如下的命令，可以创建指定名称的新分支，并立即切换到新分支上：

```
1#-b表示创过一个新分支
2#checkout表示切换到网才箭建的分支上
3 git checkout -b 分支名称
```

注意：
"git checkout -b 分支名称"是下面两条命令的简写形式：
git branch 分支名称
git checkout 分支名称

9.合并分支
功能分支的代码开发测试完毕之后，可以使用如下的命令，将完成后的代码合并到master主分支上：

```
1 #1.切铁到master分支
2 git checkout master
3 #2.在master分支上运行git merge年令，将login分支的代码合并到master分支
4 git merge login
```

合并分支时的注意点：
假设要把C分支的代码合并到A分支，则必须先切换到A分支上，再运行git merge命令，来合并C分支！

删除分支
当把功能分支的代码合并到master主分支上以后，就可以使用如下的命令，删除对应的功能分支：

```
1 git branch -d 分支名称
```

10.遇到冲突时的分支合并
如果在两个不同的分支中，对同一个文件进行了不同的修改，Git就没法干净的合并它们。此时，我们需要打开这些包含冲突的文件然后手动解决冲突。

![image-20220430185123432](C:\Users\shadow\AppData\Roaming\Typora\typora-user-images\image-20220430185123432.png)

```
1 #假设：在把reg分支合并到master分支期间，代码发生了冲突
2 git checkout master
3 git merge reg
5 #打开包含冲突的文件，手动解决冲突之后，再执行如下的命令
6 git add
7 git commit-m"解决了分支合并冲突的问题"
```

### 9.远程分支操作

1.将本地分支推送到远程仓库
如果是第一次将本地分支推送到远程仓库，需要运行如下的命令：

```
1 #-山表示把本地分支和远程分支进行关联，只在第一次指送的时候要带-u参数
2 git push-u远程仓库的别名本地分支名称：运程分支名称
3
4 #实际案例：
5 git push -u origin payment:pay
6
7 #如果希望远程分支的名称和本地分支名称保持一数，可以对命令进行简化：
8 git push -u origin payment
```

注意：第一次推送分支需要带 -u 参数，此后可以直接使用git push推送代码到远程分支。

2,查看远程仓库中所有的分支列表
通过如下的命令，可以查看远程仓库中，所有的分支列表的信息：

```
1 git remote show 远程仓库名称
默认远程仓库的名字 origin
```

3,跟踪分支
跟踪分支指的是：从远程仓库中，把远程分支下载到本地仓库中。需要运行的命令如下：

```
1 #从远程仓库中，把对应的远程分支下载到本地仓库，保持本地分支和远程分支名称相同
2 git checkout 远程分支的名称
3 #示例：
4 git checkout pay
5
6 #从远程仓库中，把对应的远程分支下款到本地仓库，并把下数的本地分支进行重命名
7 git checkout-b 本地分支名称 远程仓库名称/远程分支名称
8 #示例：
9 git checkout -b payment origin/pay
```

4.拉取远程分支的最新的代码
可以使用如下的命令，把远程分支最新的代码下载到本地对应的分支中：

```

1 #从远程仓库，拉取当前分支最新的代码，保特当前分支的代码和远程分支代码一致
2 git pull
```

5.删除远程分支
可以使用如下的命令，删除远程仓库中指定的分支：

```
1 #删除远程仓库中，指定名称的远程分支
2 git push 远程仓库名称 --delete 远程分支名称
3 #示例：
4 git push origin --delete pay
```

### 10.总结

①能够学握Gt中基本命令的使用

●git init
●git add
●git commit-m"提交消息"
●git status和git status-s
②能够使用Github创建和维护远程仓库

●能够配置Github的SSH访问
●能够将本地仓库上传到Github
③能够掌握Git分支的基本使用

●git checkout-b新分支名称
●git push -u origin新分支名称
●git checkout分支名称
●git branch
