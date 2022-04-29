var that;
class Tab {
	constructor(id) {
		//获取元素
		that = this;
		this.main = document.querySelector(id);

		this.add = this.main.querySelector('.tabadd');

		//li的父元素
		this.ul = this.main.querySelector('.fisrstnav ul:first-child')
		//section父元素
		this.fsection = this.main.querySelector('.tabscon')
		this.init();
	}
	init() {
		this.undateNode();
		// 初始化 元素绑定
		this.add.onclick = this.addTab;
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].index = i;
			this.lis[i].onclick = this.toggleTob;
			this.remove[i].onclick = this.removeTab;
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
		}
	}
	//获取li 和 section 重新获取
	undateNode() {
		this.lis = this.main.querySelectorAll('li');
		this.sections = this.main.querySelectorAll('section');
		this.remove = this.main.querySelectorAll('.icon-guanbi')
		this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
		
	}
	//切换
	toggleTob() {
		// ''console.log(this.index)
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';

	}
	//清除类
	clearClass() {
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}
	//添加
	addTab() {
		// 先清除
		that.clearClass();
		//创建li
		var random = Math.random();
		var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
		//创建 section
		var section = '<section class="conactive">新选项卡' + random + '</section>';
		//追加在里面 insertAdjacentHTML直接可以把字符串添加进元素 beforeend放到后面
		that.ul.insertAdjacentHTML('beforeend', li);
		that.fsection.insertAdjacentHTML('beforeend', section)
		that.init();
	}
	//删除
	removeTab(e) {
		e.stopPropagation(); //阻止冒泡
		var index = this.parentNode.index;
		// console.log(index)
		//根据引号删除对应的li和section
		that.lis[index].remove(); //remove删除指定元素
		that.sections[index].remove();
		that.init();
		//当我们选择的不是选定状态的选定状态不变 
		//如果有这个类就跳出执行
		if (document.querySelector('.liactive')) return;
		//当删除选定状态的元素前面的选定状态
		index--;
		that.lis[index] && that.lis[index].click(); //执行点击操作手动调用不需要鼠标 &&前面小于0不执行
	}
	//修改
	editTab() {
		var str = this.innerHTML;
		//使网页双击禁止选择
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
		this.innerHTML = "<input type=''text' value='" + str + "'/>"
		var input = this.children[0]
		// input.value=str;
		input.select(); //文本框文字处于选定
		//当离开文本框把值给span
		input.onblur = function() {
			this.parentNode.innerHTML = this.value;
		}
		//回车
		input.onkeyup = function(e) {
			if (e.keyCode === 13) {
			this.blur();//相对于执行离开文本框
			}
		}
	}
}

new Tab('#tab');
// tab.init();
