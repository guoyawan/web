window.onload=function () {
// 获取元素
    var oUse=document.getElementById('use');
    var oOff=document.getElementById('off');
    var oBack=document.getElementById('back');
    var oArs=document.getElementById('ars');
    var oLi=oArs.getElementsByTagName('li');

// sign window
    oUse.onclick=function () {
        oBack.style.display='block';
    };  /*点击弹出注册框*/
    oOff.onclick=function () {
        oBack.style.display='none';
    }; /*点击关闭注册框*/

// ars begin
    for(var a=0; a<oLi.length;a++){
        oLi[a].onmouseover=function () {
            for(var a=0; a<oLi.length;a++){
                oLi[a].className='playf1'
            }  /*利用循环清除所有选中效果*/
        this.className='playf '; /*选项卡选中效果*/
        };
    }
    // ars end

    // hot center/   subways/  life/  coupons begin

// 定义参数
    function  tagtop(big,broad,tags ) {
    var oHot=document.getElementById(big);/*获取元素*/
    var aP=oHot.getElementsByTagName(tags);
    var aUl=oHot.getElementsByTagName(broad);

    for(var i=0; i<aP.length;i++) {
        aP[i].index = i; /*给 aP赋值*/
        aP[i].onmouseover = function () { /*鼠标移入效果*/
            for (var i = 0; i < aP.length; i++) {
                aUl[i].className = ''; /*利用循环清除所有选中效果*/
                aP[i].className = '';
            };
            aUl[this.index].className = 'pear'; /*选项卡选中效果*/
            aP[this.index].className = 'lio';
        };
      }
    }
    // 使用参数 /*传递参数*/
    tagtop('hot','ul','p');          /*hot 使用参数*/
    tagtop('subways','strong','p');  /*subways使用参数*/
    tagtop('life','ul','a'); /*life使用参数*/
    tagtop('coupons','ul','a'); /*coupons使用参数*/


// hot 、 subways    /life    /coupons/    end

// best begin
//     获取元素
    var oGirl=document.getElementById('girl');
    var aImg=oGirl.getElementsByTagName('img');
    var aLi=oGirl.getElementsByTagName('li');

        var iol='0'; /*变量 iol 的初始值为0*/

    // 定义参数
        function tag() {
            for(var i=0; i<aLi.length;i++){
                aImg[i].className='';/*利用循环清除所有选中效果*/
                aLi[i].className='';
            }
            aImg[iol].className='girls'; /*选项卡选中效果*/
            aLi[iol].className='taggirl';
        }


// girl onmouseover
        for(var i=0; i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function () {  /*鼠标移入效果*/
                iol=this.index;
                tag();/*使用参数*/
            };
    }

// girl setInterval
    var ban=setInterval (function() { /*用定时器定时 用于轮番效果*/
        iol++;/*自增*/
        if ( iol>aLi.length -1)iol=0;
        tag(); /*使用参数*/
    },1000);

    // stop
    oGirl.onmouseover=function () {
        clearInterval(ban) /*鼠标移入时定时器停止 轮番效果停止*/
    };
    // move
    oGirl.onmouseout=function () {
        ban=setInterval( function(){/*鼠标移出时定时器开启 轮番效果开始*/
            iol++;/*自增*/
            if ( iol>aLi.length-1)iol=0;
            tag(); /*使用参数*/
        },1000);
    };
// best end

    // day-left begin
    // 获取元素
    var oImg=document.getElementById('img1'),
          oForest=document.getElementById('forest'),
          oTagday=document.getElementById('tagday');
    var aA=oTagday.getElementsByTagName('a');
    var aB=oTagday.getElementsByTagName('b');

    var picture=[
        '../images/9.png',
        '../images/1.png',
        '../images/2.png',
        '../images/3.png',
        '../images/4.png',
        '../images/5.png',
        '../images/6.png',
        '../images/7.png',
        '../images/15.png',
        '../images/8.png',
        '../images/10.png',
        '../images/11.jpg',
        '../images/12.png',
        '../images/13.png',
        '../images/14.png',
        '../images/play.png',
        '../images/16.png',
        '../images/17.png',
        '../images/18.png',
        '../images/19.png',
        '../images/20.png',
        '../images/21.png',
        '../images/22.png',
        '../images/23.png',
        '../images/24.png',
        '../images/25.png',
        '../images/26.png',
        '../images/27.png',
        '../images/28.png',
        '../images/29.png',
        '../images/30.png',
    ]; /*声明数组变量*/
    var  number=['本日主题xxxxxxxx','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','18','20','21','22',
                         '23','24','25','26','27','28','29','30']; /*声明数组变量*/

    for(var i=0; i<aA.length;i++){
        aA[i].index=i;
        aA[i].onmouseover=function () {  /*鼠标移入效果*/

            for (var i=0; i<aA.length;i++){
                aA[i].style.background='#ededed'; /*利用for循环恢复背景*/
                aA[i].style.display='block';  /*循环让a标签出现*/
                aB[i].style.display='none';  /*循环让a标签消失*/
            }

            aA[this.index].style.display='none';
            aB[this.index].style.display='block';
            aB[this.index].style.backgroundImage='url('+picture[this.index]+')';/*利用数组插入背景*/
            aB[this.index].style.backgroundSize='cover';
            oForest.innerHTML= number[this.index]; /*利用数组插入文本*/
            oImg.src=picture[this.index]; /*利用数组插入图片*/
        };
    };
  // day-left  end
};




