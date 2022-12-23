let users=[{name:'user1',pwd:'111111'},{name:'user2',pwd:'222222'},{name:'user3',pwd:'333333'}];
let admins=[{name:'pwj',pwd:'20184404'},{name:'admin',pwd:'123456'}];
var i=0;

function setCookie(cname){
    document.cookie = cname;
}

function checkCookie(){
    var f1=-1;
    var f2=-1;
    for(i=0;i<users.length;i++){
        f1 = document.cookie.indexOf(users[i].name);
        if(f1>=0)break;
    }
    for(i=0;i<admins.length;i++){
        f2 = document.cookie.indexOf(admins[i].name);
        if(f2>=0)break;
    }
    if (f1>=0||f2>=0){
        alert("您已经登录");
        window.location.href="index.html";
    }
}

function checkUser(){
    var f1=-1;
    var f2=-1;
    var f11=-1;
    var f12=-1;
    var f21=-1;
    var f22=-1;
    var username=document.getElementById("uname").value;
    var password=document.getElementById("psw").value;
    for(i=0;i<users.length;i++){
        f11 = username.indexOf(users[i].name);
        f12 = password.indexOf(users[i].pwd);
        if(f11>=0&&f12>=0){
            f1=0;
            break;
        }
    }
    for(i=0;i<admins.length;i++){
        f21 = username.indexOf(admins[i].name);
        f22 = password.indexOf(admins[i].pwd);
        if(f21>=0&&f22>=0){
            f2=0;
            break;
        }
    }
    if(f1>=0){
            setCookie(username);
            alert("用户登录成功！");
            window.location.href="index.html";
    }
    else if(f2>=0){
        setCookie(username);
        alert("管理员登录成功！");
        window.location.href="index.html";
    }
    else if(username.length <=0){
        alert("请输入用户名！");
    }
    else{
        alert("用户名或密码输入错误！");
    }
}
