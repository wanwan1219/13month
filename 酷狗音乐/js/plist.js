/**
 * Created by 000 on 2017/11/7.
 */
window.onload=function(){
    $("#header").load("header.html");
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
                if(index<4){
                    ajax();
                }else if(index==4){
                    index=0;
                }
            }
        });
        ajax();
        function ajax(){
            $.ajax({
                url:"js/plist.json",
                type:"GET",
                async:false
            }).done(function(e){
                var data= e[index].data.list;
                console.log(e);
                for(var i= 0;i<data.length;i++){
                    $("#list2").append('<li class="clear">'+
                        '<img class="img1" src="'+data[i].coverImg+'" alt=""/>'+
                        '<div class="box">'+
                        '<p>'+data[i].title+'</p>'+
                        '<img src="img/icon_music.png" alt=""/>'+
                        '<span>'+data[i].number+'</span>'+
                        '</div>'+
                        '<img src="img/arrow_icon.png" class="img2" alt=""/>'+
                        '</li>')
                }
            })
        }
    })();
};
