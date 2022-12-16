function login(){
    var usernumbers = ["000","001","002"];
    var passwords = ["000","001","002"];
    let obj = document.getElementById("login_input");
    let button = obj.querySelector("button");
    let usernumber = document.getElementById("user_number");
    let password = document.getElementById("password");
    button.onclick = () => {
        if(usernumber.value == ""){
            window.alert("请输入账号");
        }
        else if(password.value == ""){
            window.alert("请输入密码");
        }
        else{
            let i = 0 ;
            for(; i < passwords.length; ++i){
                if(usernumbers[i] == usernumber.value){
                    if(passwords[i] == password.value){
                        document.cookie = 'islogin=1';
                        window.location = "form.html";
                    }
                    else{
                        window.alert("密码错误");
                    }
                    break;
                }
            }
            if(i == passwords.length){
                window.alert("账号不存在");
            }
        }
    }
}
var cookies = document.cookie.split(";");
let i = 0;
console.log(cookies.length);
for(; i < cookies.length; ++i){
    var dc = cookies[i].split("=");
    console.log(dc);
    if(dc[0]=='islogin' || dc[0]==' islogin'){
        console.log(dc[1]);
        if(dc[1]=="1"){
            window.location = "form.html";
        }else{
            login();
        }
        break;
    }
}
if(i == cookies.length){
    login();
}
