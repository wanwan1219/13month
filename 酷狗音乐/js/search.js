/**
 * Created by 000 on 2017/11/8.
 */
window.onload=function(){
  $(".ss2 input").focus(function(){
      $(".ss2 span").addClass("span1")
  }).blur(function(){
      if($(".ss2 input").val()==""){
          $(".ss2 span").removeClass("span1")
      }else{
          $(".ss2 span").addClass("span1")
      }
  })
};