
//获取元素，小时，分钟，秒
var timeout_h=document.getElementsByClassName("main1")[0];
var timeout_m=document.getElementsByClassName("main1")[1];
var timeout_s=document.getElementsByClassName("main1")[2];
//设置定时器
setInterval(function(){
    var currentSecond=Number(timeout_s.innerHTML);
    currentSecond--;
    //设置秒数
    if(currentSecond<10){
       var  second="0"+currentSecond;
    }
    else{
        second=currentSecond;
    }
    timeout_s.innerHTML=second;
    //设置分钟
    if(currentSecond<0){
        timeout_s.innerHTML=59;
        var currentMinute=Number(timeout_m.innerHTML);
        currentMinute--;
        if(currentMinute<10){
            var  minute="0"+currentMinute;
        }
        else{
            minute=currentMinute;
        }
        timeout_m.innerHTML=minute;
    }
    //设置小时
    if(currentMinute<0){
        timeout_m.innerHTML=59;
        var currentHour=Number(timeout_h.innerHTML);
        currentHour--;
        if(currentHour<10){
            var  hour="0"+currentHour;
        }
        else{
            hour=currentHour;
        }
        timeout_h.innerHTML=hour;
    }
},1000);
