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
            //�жϹ��������ײ�����Ҫ�õ�DOM����������ֵ����scrollTop��clientHeight��scrollHeight��
            //scrollTopΪ��������Y���ϵĹ������롣
            var scrollTop;
            scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            //clientHeightΪ���ݿ�������ĸ߶ȡ�
            //scrollHeightΪ���ݿ�������ĸ߶ȼ���������������ľ��롣
            //���ԣ����������ײ���������ΪscrollTop + clientHeight == scrollHeight

            if(document.documentElement.scrollHeight == document.documentElement.clientHeight + scrollTop) {
                //�������
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