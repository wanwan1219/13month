/**
 * Created by 000 on 2017/11/8.
 */
window.onload=function(){
    var m=window.location.hash.substring(1);
    console.log(m);
    if(m){
        var xhr=new XMLHttpRequest();
        xhr.open("get","js/package.json");
        xhr.send(null);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    var list=JSON.parse(xhr.responseText);
                    console.log(list);
                    $(".bg img").attr("src",list[m].data.coverImg);
                    $(".ss p").text(list[m].data.status)
                }
            }
        }
    }
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
                    $("#list1").append('<div class="clear"><p>'+ data[i].title+'</p> <img src="img/download_icon_2.png" alt=""/></div>')
                }
            })
        }
    })();
};