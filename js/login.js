let users=[{name:'user1',pwd:'111111'},{name:'user2',pwd:'222222'},{name:'user3',pwd:'333333'}];
let admin=[{name:'pwj',pwd:'20184404'},{name:'admin',pwd:'123456'}]

let username=document.getElementById("uname");
let pwd=document.getElementById("pwd");
let btn=document.getElementById("login");

function setCookie(uname){
    document.cookie = uname;
}

function checkCookie(){
    let i = 0;
      for(i = 0; i < users.length;i++){
        f1 = document.cookie.indexOf(users[i].name);
        if(f1 >= 0)break;
      }
      for(i = 0; i < users.length;i++){
        f2 = document.cookie.indexOf(users[i].name);
        if(f2 >= 0)break;
      }
      if (f1>=0||f2>=0){
        alert("您已经登录");
        location.href="index.html";
      }
}

function check_login(){
    var username=document.getElementById("uname").value;
    var passwd=document.getElementById("psw").value;
    let ret=users.some(function(value){
        return value.name==username.value && value.pwd==pwd.value;
    });
    
    let check_admin=admin.some(function(value){
        return value.name==username.value && value.pwd==pwd.value;
    });
    
    if(username.value==localStorage.getItem('username1') && pwd.value==localStorage.getItem('pwd1')){
        alert("用户登入成功");
        window.location.href="index.html";
            /* 判断是否是预设账户 并判断是用户或管理分别跳转 */		
    }
    else if(ret){
        setCookie(username);
        alert("用户登入成功");
        location.href="../index.html"
    }
    else if(check_admin){
        setCookie(username);
        alert("管理员登入成功");
        location.href="../index.html";
    }
    else{/* 输入错误 */
        alert("输入正确用户名和密码");
    }
}
btn.onclick() = check_login();