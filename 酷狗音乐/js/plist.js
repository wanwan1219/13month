/**
 * Created by 000 on 2017/11/7.
 */
window.onload=function(){
    $("#header").load("header.html");
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
