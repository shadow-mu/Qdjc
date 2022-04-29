$(function() {
	// alert(11);
	// 1. 按下回车 把完整数据 存储到本地存储里面
	// 存储的数据格式  var todolist = [{title: "xxx", done: false}]
	load();
	$("#title").on("keydown", function(event) {
		if (event.keyCode === 13) {
			if($(this).val()==""){
				alert("请输入")
			}else{
				//先读取数据
				var local = getDate();
				// console.log(local)
				//把数组更新数据 追加数组数据
				local.push({
					title: $(this).val(),
					done: false
				});
				//数组存储
				savaDate(local)
				//渲染加载页面
				load()
				$(this).val("");
			}
		}
	})
	//删除
	$("ol,ul").on("click", "a", function() {
		//先读取数据
		var data = getDate();
		// console.log(data)
		//修改数据
		var index = $(this).attr("id")
		// console.log(index)
		// 直接修改本地存储数据 然后重新渲染
		data.splice(index, 1) //删除数组元素
		//保存本地存储 删除之后的保存
		savaDate(data)
		//重新渲染页面
		load()
	})
	//已经完成
	$("ol,ul").on("click","input",function(){
		//先读取数据
		var data = getDate();
		//修改数据 拿兄弟a里面id 修改done属性$(this).prop("checked")
		var index = $(this).siblings("a").attr("id")
		data[index].done=$(this).prop("checked")
		// console.log(data)
		//保存本地存储
		savaDate(data);
		//重新渲染页面
		load()
		
	})
	// 读取数据
	function getDate() {
		var data = localStorage.getItem("todolist");
		if (data !== null) {
			return JSON.parse(data);
		} else {
			return [];
		}
	}
	//数组存储
	function savaDate(data) {
		localStorage.setItem("todolist", JSON.stringify(data))
	}
	//渲染加载页面
	function load() {
		//先读取数据
		var data = getDate()
		//遍历数据之前先清空要不渲染两遍
		$("ol,ul").empty();
		var todocount=0 //正在进行的个数
		var donecount=0 //以经完成的个数
		//遍历数据
		$.each(data, function(i, n) {
			// console.log(n)
			if(n.done){
				$("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + n.title +
				"</p><a href='javascript:;' id=" + i + "></a></li>");
				donecount++;
			}else{
				$("ol").prepend("<li><input type='checkbox'><p>" + n.title +
				"</p><a href='javascript:;' id=" + i + "></a></li>")
				todocount++;
			}
			
		})
		$("#todocount").text(todocount);
		$("#donecount").text(donecount);
	}


})
