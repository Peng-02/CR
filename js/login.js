let users=[{name:'user1',pwd:'111111'},{name:'user2',pwd:'222222'},{name:'user3',pwd:'333333'}];
let admins=[{name:'pwj',pwd:'20184404'},{name:'admin',pwd:'123456'}];
var i=0;
var f1=0;
var f2=0;
var f11=0;
var f12=0;
var f21=0;
var f22=0;

function setCookie(cname){
    document.cookie = cname;
}

function checkCookie(){
    for(i=0;i<users.length;i++){
        f1 = document.cookie.indexOf(users.name);
        if(f1>=0)break;
    }
    for(i=0;i<admins.length;i++){
        f1 = document.cookie.indexOf(users.name);
        if(f1>=0)break;
    }
    if (f1>=0||f2>=0){
        alert("您已经登录");
        window.location.href="index.html";
    }
}

function checkUser(){
    var username=document.getElementById("name").value;
    var password=document.getElementById("psw").value;
    for(i=0;i<users.length;i++){
        f11 = username.indexOf(users.name);
        f12 = password.indexOf(users.pwd);
        if(f11>=0&&f12>0){
            f1=0;
            break;
        }
    }
    for(i=0;i<users.length;i++){
        f21 = username.indexOf(users.name);
        f22 = password.indexOf(users.pwd);
        if(f21>=0&&f22>0){
            f2=0;
            break;
        }
    }
    if(f1||f2>0){
            setCookie(username);
            alert("登录成功！");
            window.location.href="index.html";

    }else{
        alert("用户或密码输入错误");
    }
}
