/**
 * Created by 000 on 2017/11/20.
 */
window.onload=function(){
    $(".btn").click(function(){
        if($(".page-p1 input").val()!==""&&$(".page-p2 input").val()!==""){
            window.location.href="zuce2.html";
        }
    });
};