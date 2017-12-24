/**
 * Created by 000 on 2017/11/20.
 */
window.onload=function(){
    var d=10;
    var timer=setInterval(function(){
        d--;
        if(d<=0){
            d=0;
            clearInterval(timer);
            window.location.href="load.html";
        }
        $(".dj-tz a").html("还有  "+d+"s  自动跳转登录页面");
    },1000);
    $(".btn").click(function(){
        window.location.href="load.html";
    })
};