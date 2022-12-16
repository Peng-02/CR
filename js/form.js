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
            document.getElementsByName("number")[0].value = mynumber;
            document.getElementsByName("symbol")[0].value = dc.info_0;
            document.getElementsByName("zh_symbol")[0].value = dc.info_1;
            document.getElementsByName("weight")[0].value = dc.info_2;
            document.getElementsByName("melting_point")[0].value = dc.info_3;
            document.getElementsByName("boiling_point")[0].value = dc.info_4;
            document.getElementsByName("periodic")[0].value = dc.info_6;
            document.getElementsByName("clan")[0].value = dc.info_7;
            document.getElementsByName("classification")[0].value = dc.info_5;
            if(dc.rainfo == '0'){
                document.getElementsByName("a1")[0].checked = "checked";
            }else{
                document.getElementsByName("a1")[1].checked = "checked";
            }
            document.getElementsByName("boxs")[0].checked = "";
            document.getElementsByName("boxs")[1].checked = "";
            document.getElementsByName("boxs")[2].checked = "";
            document.getElementsByName("f_e_number")[0].value = '';
            document.getElementsByName("d_e_number")[0].value = '';
            document.getElementsByName("s_e_number")[0].value = '';
            for(let i = 0; i < 6; i = i + 2){
                var xxx = dc["info_8_"+ i];
                var yyy = dc["info_8_"+ (i+1)];
                if(xxx != ''){
                    if(xxx.indexOf('f') != -1){
                        document.getElementsByName("boxs")[0].checked = "checked";
                        document.getElementsByName("f_e_number")[0].value = yyy;
                    }
                    if(xxx.indexOf('d') != -1){
                        document.getElementsByName("boxs")[1].checked = "checked";
                        document.getElementsByName("d_e_number")[0].value = yyy;
                    }
                    if(xxx.indexOf('s') != -1){
                        document.getElementsByName("boxs")[2].checked = "checked";
                        document.getElementsByName("s_e_number")[0].value = yyy;
                    }
                }
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
        if(document.getElementsByName("number")[0].value < 1 || document.getElementsByName("number")[0].value > 118){
            window.alert("序号超出范围");
        }else{
            var post = {};
            post.info_0 = document.getElementsByName("symbol")[0].value;
            post.info_1 = document.getElementsByName("zh_symbol")[0].value;
            post.info_2 = document.getElementsByName("weight")[0].value;
            post.info_3 = document.getElementsByName("melting_point")[0].value;
            post.info_4 = document.getElementsByName("boiling_point")[0].value;
            post.info_5 = document.getElementsByName("classification")[0].value;
            post.info_6 = document.getElementsByName("periodic")[0].value;
            post.info_7 = document.getElementsByName("clan")[0].value;
            if(document.getElementsByName("a1")[1].checked){
                post.rainfo = '1';
            }else{
                post.rainfo = '0';
            }
            let count = 0;
            for(let i = 0; i < 6; i++){
                post["info_8_"+ i] = '';
            }
            for(let i = 0; i < 3; i++){
                if(document.getElementsByName("boxs")[i].checked){
                    post["info_8_"+ (count*2)] = (parseInt(post.info_6)-2+i) + document.getElementsByName("boxs")[i].value;
                    post["info_8_"+ (count*2+1)] = document.getElementsByName(document.getElementsByName("boxs")[i].value+"_e_number")[0].value;
                    count++;
                }
            }
            var briefs = [];
            var imgs = [];
            var dcs = [];
            let obj = document.getElementById("detailbrief");
            let allfieldsets = obj.querySelectorAll("fieldset");
            for(let i = 0; i<allfieldsets.length; i++){
                briefs.push(allfieldsets[i].querySelector('textarea').value);
            }
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
            if(parseInt(post.info_3) > parseInt(post.info_4)){
                window.alert("熔点不能高于沸点");
            }else if(post.info_0.length > 3 || post.info_1.length > 1){
                window.alert("输入名称过长");
            }else if(post.info_0.length < 1 || post.info_1.length < 1){
                window.alert("请输入名称");
            }else if(post.info_2 == ''){
                window.alert("请输入质量");
            }else{
                var special_count = parseInt(document.getElementsByName("number")[0].value);
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
