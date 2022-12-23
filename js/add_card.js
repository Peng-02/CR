function addbrief(){
    let obj = document.getElementById("detailbrief");
    let button = obj.querySelector("button");
    button.onclick = () => {
        let fieldset = document.createElement("fieldset");
        let textarea = document.createElement("textarea");
        let legend = document.createElement("legend");
        let childs = obj.querySelectorAll("fieldset");
        fieldset.style="display: flex";
        legend.textContent = "段落" + (childs.length + 1);
        let button = document.createElement("button");
        button.type = "button";
        button.textContent = "移除";
        button.onclick = () => {
            obj.removeChild(fieldset);
            let childx = obj.querySelectorAll("fieldset");
            for(let i = 0; i < childx.length; ++i){
                let child_legend = childx[i].querySelector("legend");
                child_legend.textContent = "段落" + (i+1);
            }
        }
        fieldset.appendChild(legend);
        fieldset.appendChild(textarea);
        fieldset.appendChild(button);
        obj.appendChild(fieldset);
    }
}
function addimg(){
    let obj = document.getElementById("detailimage");
    let button = obj.querySelector("button");
    let upimgs = obj.querySelector("div");
    button.onclick = () => {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        let childs = upimgs.querySelectorAll("fieldset");
        legend.textContent = "图片" + (childs.length + 1);
        fieldset.style="width:92%;display: flex;flex-direction: column";
        let button = document.createElement("button");
        button.style="margin-top:1%;width:52px;height:40px";
        button.type = "button";
        button.textContent = "移除";
        button.onclick = () => {
            upimgs.removeChild(fieldset);
            let childx = upimgs.querySelectorAll("fieldset");
            for(let i = 0; i < childx.length; ++i){
                let child_legend = childx[i].querySelector("legend");
                child_legend.textContent = "图片" + (i+1);
            }
        }
        fieldset.appendChild(legend);
        let img = document.createElement("img");
        img.className = "upload_img"
        let img_upload = document.createElement("input");
        img_upload.style="margin-top:1%;";
        img_upload.type = "file";
        img_upload.onchange = ()=> {
            console.log(img_upload);
            if(img_upload.files.length){
                let file = img_upload.files[0];
                let reader = new FileReader();
                reader.onload = function(){
                    img.src = this.result;
                };
                reader.readAsDataURL(file);
                }                
        }
        fieldset.appendChild(img);
        fieldset.appendChild(img_upload);
        fieldset.appendChild(button);
        upimgs.appendChild(fieldset);
    }
}
function mysearch(){
    let search_obj = document.getElementById("my_search");
    let button = search_obj.querySelectorAll("button");
    button[0].onclick = () =>{
        var mynumber = search_obj.querySelector("input").value;
        var special_count = parseInt(mynumber);
        if(special_count > 57 && special_count < 72){
            special_count += 33;
        }else if(special_count > 71 && special_count < 90){
            special_count -= 14;
        }else if(special_count > 89 && special_count < 104){
            special_count += 15;
        }else if(special_count > 103){
            special_count -= 28;
        }
        console.log(special_count);
        var dc = localStorage.getItem("post"+special_count);
        if(dc == null){
            window.alert("不存在");
        }else{
            dc = JSON.parse(dc);
            document.getElementsByName("card_id")[0].value = mynumber;
            document.getElementsByName("card_name")[0].value = dc.info_0;
            document.getElementsByName("cost")[0].value = dc.info_1;
            document.getElementsByName("hitpoint")[0].value = dc.info_2;
            document.getElementsByName("damage")[0].value = dc.info_3;
            document.getElementsByName("hit_speed")[0].value = dc.info_4;
            document.getElementsByName("range")[0].value = dc.info_6;
            document.getElementsByName("rarity")[0].value = dc.info_7;
            document.getElementsByName("type")[0].value = dc.info_5;
            document.getElementsByName("target")[0].value = dc.info_6;
            document.getElementsByName("speed")[0].value = dc.info_7;
            if(dc.rainfo == '0'){
                document.getElementsByName("a1")[0].checked = "checked";
            }else{
                document.getElementsByName("a1")[1].checked = "checked";
            }
            
            //清除当前段落并读入保存段落
            let obj = document.getElementById("detailbrief");
            let allfieldsets = obj.querySelectorAll("fieldset");
            for(let i = 0; i<allfieldsets.length; i++){
                obj.removeChild(allfieldsets[i]);
            }
            for(let i = 0; i < dc.briefs.length; i++){
                let fieldset = document.createElement("fieldset");
                let textarea = document.createElement("textarea");
                textarea.value=dc.briefs[i];
                let legend = document.createElement("legend");
                let childs = obj.querySelectorAll("fieldset");
                fieldset.style="display: flex";
                legend.textContent = "段落" + (childs.length + 1);
                let button = document.createElement("button");
                button.type = "button";
                button.textContent = "移除";
                button.onclick = () => {
                    obj.removeChild(fieldset);
                    let childx = obj.querySelectorAll("fieldset");
                    for(let i = 0; i < childx.length; ++i){
                        let child_legend = childx[i].querySelector("legend");
                        child_legend.textContent = "段落" + (i+1);
                    }
                }
                fieldset.appendChild(legend);
                fieldset.appendChild(textarea);
                fieldset.appendChild(button);
                obj.appendChild(fieldset);
            }

            //清除当前图片并读入保存图片
            let img_obj = document.getElementById("detailimage");
            let upimgs = img_obj.querySelector("div");
            let allimgfieldsets = upimgs.querySelectorAll("fieldset");
            for(let i = 0; i<allimgfieldsets.length; i++){
                upimgs.removeChild(allimgfieldsets[i]);
            }
            for(let i = 0; i < dc.imgs.length; i++){
                let fieldset = document.createElement("fieldset");
                let legend = document.createElement("legend");
                let childs = upimgs.querySelectorAll("fieldset");
                legend.textContent = "图片" + (childs.length + 1);
                fieldset.style="width:92%;display: flex;flex-direction: column";
                let button = document.createElement("button");
                button.style="margin-top:1%;width:52px;height:40px";
                button.type = "button";
                button.textContent = "移除";
                button.onclick = () => {
                    upimgs.removeChild(fieldset);
                    let childx = upimgs.querySelectorAll("fieldset");
                    for(let i = 0; i < childx.length; ++i){
                        let child_legend = childx[i].querySelector("legend");
                        child_legend.textContent = "图片" + (i+1);
                    }
                }
                fieldset.appendChild(legend);
                let img = document.createElement("img");
                img.src = dc.imgs[i];
                img.className = "upload_img"
                let img_upload = document.createElement("input");
                img_upload.style="margin-top:1%;";
                img_upload.type = "file";

                img_upload.onchange = ()=> {
                    if(img_upload.files.length){
                        let file = img_upload.files[0];
                        let reader = new FileReader();
                        reader.onload = function(){
                            img.src = this.result;
                        };
                        reader.readAsDataURL(file);
                        }                
                }
                fieldset.appendChild(img);
                fieldset.appendChild(img_upload);
                fieldset.appendChild(button);
                upimgs.appendChild(fieldset);
            }
        }
    }
    button[1].onclick = () =>{
        var mynumber = search_obj.querySelector("input").value;
        var special_count = parseInt(mynumber);
        if(special_count > 57 && special_count < 72){
            special_count += 33;
        }else if(special_count > 71 && special_count < 90){
            special_count -= 14;
        }else if(special_count > 89 && special_count < 104){
            special_count += 15;
        }else if(special_count > 103){
            special_count -= 28;
        }
        mynumber = special_count;
        if(localStorage.getItem("post" + mynumber) == null){
            window.alert("不存在");
        }else{
            localStorage.removeItem("post" + mynumber);
            if(mynumber == 1 ||mynumber == 2||mynumber == 3){
                window.alert("删除成功,该内容将在返回首页后刷新");
            }else{
                window.alert("删除成功");
            }
        }
    }
}
function the_submit(){
    let button = document.getElementById("submitbutton");
    button.onclick = () => {
        if(document.getElementsByName("cid")[0].value < 1 || document.getElementsByName("cid")[0].value > 150){
            window.alert("ID超出范围");
        }else{
            var post = {};
            post.info_0 = document.getElementsByName("cid")[0].value;
            post.info_1 = document.getElementsByName("card_name")[0].value;
            post.info_2 = document.getElementsByName("cost")[0].value;
            post.info_3 = document.getElementsByName("hitpoint")[0].value;
            post.info_4 = document.getElementsByName("damage")[0].value;
            post.info_5 = document.getElementsByName("hit_speed")[0].value;
            post.info_6 = document.getElementsByName("rarity")[0].value;
            post.info_7 = document.getElementsByName("type")[0].value;
            post.info_8 = document.getElementsByName("target")[0].value;
            post.info_9 = document.getElementsByName("speed")[0].value;
            if(document.getElementsByName("a1")[1].checked){
                post.rainfo = '1';
                window.alert("1");
            }else{
                post.rainfo = '0';
                window.alert("0");
            }
            var briefs = [];
            var imgs = [];
            var dcs = [];
            let obj = document.getElementById("detailbrief");
            let allfieldsets = obj.querySelectorAll("fieldset");
            for(let i = 0; i<allfieldsets.length; i++){
                briefs.push(allfieldsets[i].querySelector('textarea').value);
            }
            window.alert("for");
            let img_obj = document.getElementById("detailimage");
            let upimgs = img_obj.querySelector("div");
            let allimgfieldsets = upimgs.querySelectorAll("fieldset");
            for(let i = 0; i<allimgfieldsets.length; i++){
                imgs.push(allimgfieldsets[i].querySelector('img').src);
                dcs.push('');
                if(i == 0){
                    dcs[0]='active';
                }
            }
            post.briefs = briefs;
            post.imgs = imgs;
            post.dcs = dcs;
           
            if(post.info_1.length > 10){
                window.alert("输入名称过长");
            }
            else if(post.info_1.length < 1){
                window.alert("请输入名称");
            }
            else if(post.info_2 == ''){
                window.alert("请输入圣水花费");
            }
            else if(post.info_3 == ''){
                window.alert("请输入生命值");
            }
            else if(post.info_4 == ''){
                window.alert("请输入伤害");
            }
            else if(post.info_5 == ''){
                window.alert("请输入攻速");
            }
            else if(post.info_6 == '0'){
                window.alert("请选择稀有度");
            }
            else if(post.info_7 == '0'){
                window.alert("请选择卡牌类型");
            }
            else if(post.info_8 == '0'){
                window.alert("请选择攻击目标");
            }
            else if(post.info_9 == '0'){
                window.alert("请选择移速");
            }
            else{
                console.log(document.getElementsByName("cid")[0].value);
                localStorage.setItem("post"+special_count, JSON.stringify(post));
                window.alert("提交成功");
            }
        }
        
    }
}
addbrief();
addimg();
mysearch();
the_submit();
