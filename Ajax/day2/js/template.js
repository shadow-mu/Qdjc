function template(id,data){
	var str=document.getElementById(id).innerHTML
	var pattern = /{{\s*([a-zA-Z]+)\s*}}/
	var pattResult=null;//初始化
	while(pattResult=pattern.exec(str)){
		str=str.replace(pattResult[0],data[pattResult[1]])
	}
	return str
}