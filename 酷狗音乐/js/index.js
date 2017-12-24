/**
 * Created by 000 on 2017/10/23.
 */
window.onload=function(){
    function cla(a){
        return document.getElementsByClassName(a);
    }
//banner图部分
    $("#header").load("header.html");
    (function(){
        var banner=cla("banner")[0],
            ul=banner.children[0],
            ullis=ul.children,
            ol=banner.children[1],
            ollis=ol.children,
            len=ullis.length,
            wid=banner.offsetWidth;
        var start= 0,index= 1,kk= 0,end= 0,step= 0,move= 0,cha= 0,fa=true,timer=null;
        timer=setInterval(next,1500);
        banner.addEventListener("touchstart",function(e){
            start=e.touches[0].pageX;
            clearInterval(timer);
        });
        banner.addEventListener("touchend",function(e){
            end=e.changedTouches[0].pageX;
            cha=end-start;
            if(cha>wid*(1/3)&&fa==true){
                prev();
                fa=false;
            }else if(cha<-wid*(1/3)&&fa==true){
                next();
                fa=false;
            }else{
                ul.style.transition="left .5s linear";
                ul.style.left=-index*wid+"px";
            }
            timer=setInterval(next,1500);
        });
        banner.addEventListener("touchmove",function(e){
            move=e.touches[0].pageX;
            step=move-start;
            ul.style.left=-index*wid+step+"px";
        });
        ul.addEventListener("transitionend",function(){
            if(index>=len-1){
                index=1;
            }
            if(index<=0){
                index=len-2;
            }
            ul.style.transition="none";
            ul.style.left=-index*wid+"px";
            fa=true;
        });
        function next(){
            index++;
            ul.style.left=-wid*index+"px";
            ul.style.transition="left .5s linear";
            kk++;
            if(kk>len-3){
                kk=0;
            }
            for(var i=0;i<len-2;i++){
                ollis[i].className="";
            }
            ollis[kk].className="col";
        }
        function prev(){
            index--;
            ul.style.left=-wid*index+"px";
            ul.style.transition="left .5s linear";
            kk--;
            if(kk<0){
                kk=len-3;
            }
            for(var i=0;i<len-2;i++){
                ollis[i].className="";
            }
            ollis[kk].className="col";
        }
    })();

    (function(){
        var index=0;
        window.addEventListener("scroll", function (event) {
            //判断滚动条到底部，需要用到DOM的三个属性值，即scrollTop、clientHeight、scrollHeight。
            //scrollTop为滚动条在Y轴上的滚动距离。
            var scrollTop;
            scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            //clientHeight为内容可视区域的高度。
            //scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
            //所以，滚动条到底部的条件即为scrollTop + clientHeight == scrollHeight

            if(document.documentElement.scrollHeight == document.documentElement.clientHeight + scrollTop) {
                //添加数据
                index++;
                if(index<3){
                    ajax();
                }
            }
        });
        ajax();
        function ajax(){
            $.ajax({
                url:"js/musicList.json",
                type:"GET",
                async:false
            }).done(function(e){
                var data= e[index].data.list;
                for(var i= 0;i<data.length;i++){
                    $("#list1").append('<div sysId="'+data[i].sysId+'" class="clear list-con"><p>'+ data[i].title+'</p> <img src="img/download_icon_2.png" alt=""/></div>')
                }
            })
        }
    })();
    (function(){
        $(".content").delegate(".list-con","click",function(){
            window.open('play.html#music'+$(this).attr("sysId"),'_self')
        })

    })();

};


