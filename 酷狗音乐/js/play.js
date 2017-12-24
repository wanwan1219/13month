/**
 * Created by 000 on 2017/11/20.
 */
window.onload=function(){
    var height=document.documentElement.clientHeight;
    $(".bg").css({"height":height});
    var fa=true;/*²»²¥·Å*/
  $(".bg2 .click .play img").click(function(){
      if($(this).attr("src")=="img/play_play.png"&&fa==true){
          $(".audio")[0].play();
          fa=false;
          $(this).attr("src","img/play_pause.png")
      }else{
          $(".audio")[0].pause();
          fa=true;
          $(this).attr("src","img/play_play.png")
      }
  });
    (function(){
        var m=window.location.hash.substring(1);
        ajax();
        function ajax(){
            var xhr=new XMLHttpRequest();
            xhr.open("get","js/music.json");
            xhr.send(null);
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        console.log(xhr.responseText);
                        //var data=JSON.parse(xhr.responseText);

                    }
                }
            }

        }

    })();

};