/**
 * Created by Administrator on 2017/5/24 0024.
 */
window.onload=function(){
    var lunbo=document.getElementsByClassName("lunbo")[0];
    var imgs=lunbo.getElementsByTagName("img");
    var lis=lunbo.getElementsByTagName("li");
    var c=0;
    function run(){
        c++;
        if(c==8){
            c=0;
        }
        // 循环让所有的图片隐藏，让所有的li变灰
        for(var i=0;i<8;i++){
            imgs[i].style.display="none";
            lis[i].style.background="#fff";
        }
        imgs[c].style.display="block";
        lis[c].style.background="red";
    }
    var timer=setInterval(run,3000);
        //   循环li
    for(var i=0;i<lis.length;i++){
        lis[i].xuhao=i;
        //   给li加鼠标移入事件并清理定时器
        lis[i].onmousever=function() {
           var c = this.xuhao;
            clearInterval(timer);
       //    获得当前的序号
            for (var i = 0; i < 8; i++) {
                imgs[i].style.display = "none";
                lis[i].style.background = "#fff";
            }
            imgs[c].style.display = "block";
            lis[c].style.background = "red";
        }
        //   给li加鼠标移出事件并回复定时器
        lis[i].onmouseout=function(){
            timer=setInterval(run,3000);
        }
    }
    // 设置倒计时效果
    // var time=new Date();
    // 创建当前时间
        function djs(){
            var time1=new Date();
            var re1=time1.getTime();
            // 创建未来的时间
            var time2=new Date(2017,05,27,23,59,59);
            var re2=time2.getTime();

            var re=re2-re1;
            var day = parseInt(re /( 1000 * 60 * 60 * 24));//转为天数
            // 获得剩余的毫秒数
            var re=re%( 1000 * 60 * 60 * 24);
            var hour=parseInt(re/(1000 * 60 * 60 ));//转为小时数
            // 获得剩余的毫秒数
            var re=re%( 1000 * 60 * 60);
            var minute=parseInt(re/(1000 * 60));//转为分钟数
            // 获得剩余的毫秒数
            var re=re%( 1000 * 60);
            var second=parseInt(re/(1000));//转为秒数
            var ss=document.getElementsByClassName('time')[0].getElementsByTagName('span');//把所有的标签都抓过来。
            if(hour<10){
                ss[0].innerHTML="0"+hour;
            }else{
                ss[0].innerHTML=hour;
            }
            if(minute<10){
                ss[1].innerHTML="0"+minute;
            }else{
                ss[1].innerHTML=minute;
            }
            if(second<10){
                ss[2].innerHTML="0"+second;
            }else{
                ss[2].innerHTML=second;
            }
        }
        djs();
        // 设置定时器，每隔一秒钟走一遍。
        setInterval(djs,1000);
}


