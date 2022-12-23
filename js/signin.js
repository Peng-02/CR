            let username=document.getElementById("uname");
			let phonenum=document.getElementById("tel");
			let pwd1=document.getElementById("pwd");
			let pwd2=document.getElementById("pwd_confirm");
			
				/* 点击按钮后触发 */
function check(){
	if(username.value==""){
		alert("请填写用户名");
	}
    else if(phonenum.value==""){
		alert("请填写手机号");
	}
    else if(pwd1.value==""){
		alert("请填写密码");
	}
	else if(pwd1.value==pwd2.value){ 
		/* 存储用户名和密码 */
		localStorage.setItem('username',username.value);
		localStorage.setItem('pwd1',pwd1.value);
		alert("用户注册成功\n请登入");
		window.location.href="login.html";
		window.event.returnValue=false;
	}else{
		alert(" 两次密码内容不一致！\n请重新输入");
		}			
	} 