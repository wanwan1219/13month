/**
 * Created by yjc88888888 on 2017/11/8.
 */
(function(num){
    var resizeEvt = 'orientationchange'in window ? 'orientationchange':'resize',   //判断是横竖屏显示 resize是设置大小 “？”判断条件是否符合  符合返回条件1 不符合返回条件2
        doc = document.documentElement,               //声明doc为html也就是当前窗口
        recalc = function(){
            var clientWidth = doc.clientWidth;       //获取当前窗口的大小
            if(!clientWidth)return;                 //判断是否获取到当前窗口的宽 如果获取不到就跳出语句 下面的不执行 “ ！”是取反
            if(clientWidth>num){                  //如果当前获取的窗口的大小大于老板规定的移动端网页的定宽   则让他等于定宽
                clientWidth=num }
            doc.style.fontSize = 100*(clientWidth/num)+'px';        //设置当前html（body）的fondSize为多少px  为了让 rem 为自适应屏幕大小
        };
    if(!document.addEventListener)return;         //判断当前浏览器的支持不支持监听事件 如果获取不到就跳出语句 下面的不执行
    window.addEventListener(resizeEvt,recalc);     //如果支持了就给当前窗口添加监听他的“resizeEvt”（前面自己定义的）事件（屏幕是否横竖屏 以及 屏幕大小是否改变）
    document.addEventListener("DOMContentLoaded",recalc);
})(640);