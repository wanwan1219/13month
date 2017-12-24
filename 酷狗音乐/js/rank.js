/**
 * Created by 000 on 2017/11/7.
 */
window.onload=function(){
    $("#header").load("header.html");
    $(".list ul li").click(function(){
        console.log(1);
        window.open("bang.html#bang"+$(this).attr("sysId"))
    });

};