/**
 * Created by 000 on 2017/10/24.
 */
window.onload=function(){
    function cla(a){
        return document.getElementsByClassName(a);
    }
    var banner=cla("banner")[0],
        ul=banner.children[0],
        ullis=ul.children,
        ol=banner.children[1],
        ollis=ol.children,
        len=ullis.length,
        wid=ullis[0].offsetWidth;
    //console.log(wid);
    var index= 1,k=0,start=0,end= 0,move= 0,cha= 0,step= 0,fa=true,timer=null;
    timer=setInterval(next,1500);
    function next(){
        index++;
        ul.style.left=-wid*index+"px";
        ul.style.transition="left .5s linear 0s";
        k++;
        if(k>len-3){
            k=0;
        }
        for(var i= 0;i<len-2;i++){
            ollis[i].className="";
        }
        ollis[k].className="col";
    }
    function prev(){
        index--;
        ul.style.left=-wid*index+"px";
        ul.style.transition="left .5s linear 0s";
        k--;
        if(k<0){
            k=len-3;
        }
        for(var i= 0;i<len-2;i++){
            ollis[i].className="";
        }
        ollis[k].className="col";
    }
    banner.addEventListener("touchstart",function(e){
        start= e.touches[0].pageX;
        clearInterval(timer)
    });
    banner.addEventListener("touchend",function(e){
        end= e.changedTouches[0].pageX;
        cha=end-start;
        if(cha>(1/3)*wid&&fa){
            prev();
            fa=false;
        }else if(cha<-(1/3)*wid&&fa){
            next();
            fa=false;
        }else{
            ul.style.left=-wid*index+"px";
            ul.style.transition="left .5s linear 0s";
        }
    });
    banner.addEventListener("touchmove",function(e){
        move=e.touches[0].pageX;
        step=move-start;
        ul.style.left=-wid*index+step+"px";
        /*ul.style.transition="left .5s linear 0s";*/
    });
    ul.addEventListener("transitionend",function(){
        ul.style.left=-wid*index+"px";
        ul.style.transition="none";
        if(index>=len-1){
            index=1;
        }
        if(index<=0){
            index=len-2;
        }
        fa=true;
    });



    var nav=cla("nav")[0],
        navlis=nav.children[0].children,
        contents=cla("contents")[0],
        contentss=contents.children;
    for(var k=0;k<navlis.length;k++){
        navlis[k].index=k;
        navlis[k].addEventListener("touchend",function(){
            var m=this.index;
            for(var n=0;n<contentss.length;n++){
                contentss[n].style.display="none";
                navlis[n].className="";
            }
            contentss[m].style.display="block";
            navlis[m].className="cli"
        })
    }



};