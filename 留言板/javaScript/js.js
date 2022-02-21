function insertHandler(){
    if($('text').val()=='') {
        alert('留言内容不能为空');
        return false;
    }
    var localTime=new Date();
    var year = localTime.getFullYear();
    var month=localTime.getMonth()+1;
    var date = localTime.getDate();
    var hour=localTime.getDate();
    var minutes=localTime.getMinutes();
    var seconds=localTime.getSeconds();
    if(Math.floor(month/10)!=1) month='0'+month;
    if(Math.floor(date/10)==0) date='0'+date;
    if(Math.floor(hour/10)==0) hour='0'+hour;
    if(Math.floor(minutes/10)==0) minutes='0'+minutes;
    if(Math.floor(seconds/10)==0) seconds='0'+seconds;
    var postTime=year+'-'+month+'-'+date+'  '+hour+':'+minutes+':'+seconds;
    $('#postTime').val(postTime);
    $.ajax({
        type:'GET',
        url:'/留言板/.do',
        data:$('form').serialize()
    });
    $(document).ajaxStart(function(){
        $('#remind').text('正在发送……').show();
    });
    $(document).ajaxStop(function(){
        $('#reset').trigger('click');
        $('#remind').text('留言成功!').fadeOut(5000);
    
    });
    var userInput = document.getElementById("username");
    var infoInput = document.getElementById("info");
    var btn = document.getElementById("btn");
    var div2 = document.getElementById("div2");
     
    btn.onclick = function(){
     
    var user = userInput.value;
    var info = infoInput.value;
     
    var divUser = document.createElement("div");
    divUser.innerText = user;
    divUser.style.backgroundColor = "darkgrey";
    divUser.style.width = "400px";
    divUser.style.height = "30px";
    div2.appendChild(divUser);
     
    var divInfo = document.createElement("div");
    divInfo.innerText = info;
    divInfo.style.backgroundColor = "antiquewhite";
    divInfo.style.width = "400px";
    divInfo.style.height = "80px";
    div2.appendChild(divInfo);
     
    var del = document.createElement("span");
    del.innerText = "删除";
    del.style.float = "right";
    divInfo.appendChild(del);
     
     
    del.onclick = function(){
    divUser.remove();
    divInfo.remove();
    del.remove();
    }
     
     
    }
     
}