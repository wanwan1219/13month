/**
 * Created by 000 on 2017/10/26.
 */
window.onload=function(){
    (function(){
        $(".ban .del").click(function(){
            $(this).parent().parent().css({display:"none"});
        })
    })();
    (function(){
        $(".banner .nav .list li").hover(function(){
            $(this).find(".box").show().parent().siblings().find(".box").hide();
        },function(){
            $(this).find(".box").hide();
        });
        $(".banner .input input").focus(function(){
            console.log(1);
            $(this).next().next().show()
        }).blur(function(){
            $(this).next().next().hide()
        })
    })();
    (function(){
        $(".banner ol li").hover(function(){
           $(this).find("span").addClass("span1");
            $(this).siblings().find("span").removeClass("span1");
        },function(){
            $(this).find("span").addClass("span1");
        });
        var index= 0,k= 0,timer=null,arr=["#B0252C","#E8E8E8","#340002","#77C38D","#DD5254","#281B13","#539ACC"];
        function next(){
            index++;
            if(index>$(".banner ol li").length){
                index=0;
            }
            $(".ban_wrap").find("li").eq(index).show().siblings().hide();
            $(".banner").css({backgroundColor:arr[index]});
            k++;
            if(k>$(".banner ol li").length){
                k=0;
            }
            $(".banner ol li").eq(k).find("span").addClass("span1");
            $(".banner ol li").eq(k).siblings().find("span").removeClass("span1");
        }
        timer=setInterval(function(){
            next();
        },1500);
        $(".banner").hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(next,1500)
        });
        $(".banner ol li").hover(function(){
            index=$(this).index();
            k=index;
            console.log($("ban_wrap").find("li").eq(index));
            $(".ban_wrap li").eq(index).show().siblings().hide();
            $(".banner").css({backgroundColor:arr[index]});
            $(".banner ol li").eq(k).find("span").addClass("span1");
            $(".banner ol li").eq(k).siblings().find("span").removeClass("span1");
        })
    })();
};