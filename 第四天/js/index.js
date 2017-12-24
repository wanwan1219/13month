/**
 * Created by 000 on 2017/10/25.
 */
window.onload=function(){
    (function(){
        var navlis=$(".header-bottom .inner ul li");
        navlis.click(function(){
            $(this).addClass("cli").siblings().removeClass("cli");
        });
        navlis.hover(function(){
            $(this).find("dl").show().parent().siblings().find("dl").hide();
        },function(){
            $(this).find("dl").hide();
        });
    })();
    (function(){
        var wid=$(".banner").width();
        $(".banner ul li").css({width:wid});
        var index=0;
        var k=0;
        var len=$(".banner ul li").length,
            prev=$(".banner .click .prev"),
            next=$(".banner .click .next"),
            ban=$(".banner"),
            timer=null,
            dot=$(".banner ol li");
        dot.click(function(){
            index=$(this).index();
            $(this).addClass("col").siblings().removeClass("col");
            ban.find("ul").stop().animate({left:-index*wid},1000);
        });
        timer=setInterval(right,1500);
        ban.hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(right,1500);
        });
        next.click(function(){
            right()
        });
        prev.click(function(){
            left();
        });
        function right(){
            index++;
            if(index>len-1){
                index=1;
                ban.find("ul").css({left:0});
            }
            k++;
            if(k>len-2){
                k=0;
            }
            ban.find("ul").stop().animate({left:-index*wid},1000);
            dot.eq(k).addClass("col").siblings().removeClass("col");

        }
        function left(){
            index--;
            if(index<0){
                index=len-2;
                ban.find("ul").css({left:-(len-1)*wid});
            }
            k--;
            if(k<0){
                k=len-2
            }
            ban.find("ul").stop().animate({left:-index*wid},1000);
            dot.eq(k).addClass("col").siblings().removeClass("col")
        }
    })();
    (function(){

    })();
};