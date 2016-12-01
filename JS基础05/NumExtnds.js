//检测email地址
String.prototype.checkEmail = function(){
	var re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ig;
	var success = re.test(this);
	if (success) {
		document.write("email地址正确");
	}else{
		document.write("email格式不正确");
	}
}