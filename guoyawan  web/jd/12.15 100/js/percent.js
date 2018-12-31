window.onload=function () {

    var oUse=document.getElementById('use');
    var oOff=document.getElementById('off');
    var oBack=document.getElementById('back');
    var oArs=document.getElementById('ars');
    var oLi=oArs.getElementsByTagName('li');

// sign window
    oUse.onclick=function () {
        oBack.style.display='block';
    };
    oOff.onclick=function () {
        oBack.style.display='none';
    };

// ars begin
    for(var a=0; a<oLi.length;a++){
        oLi[a].onmouseover=function () {
            for(var a=0; a<oLi.length;a++){
                oLi[a].className='playf1'
            };
        this.className='playf ';
        };
    };
    // ars end

    // hot center
    var oHot=document.getElementById('hot');
    var aP=oHot.getElementsByTagName('p');
    var aUl=oHot.getElementsByTagName('ul');


    for(var i=0; i<aP.length;i++){
        aP[i].index=i;
        aP[i].onmouseover=function () {
            for(var i=0; i<aP.length;i++){
                aUl[i].className='';
                aP[i].className='';
            };
            aUl[this.index].className='pear';
            this.className='lio';
        };
    };
// hot end

// best begin
    var oGirl=document.getElementById('girl');
    var aImg=oGirl.getElementsByTagName('img');
    var aLi=oGirl.getElementsByTagName('li');

    var iol='0';
    function tag() {
        for(var i=0; i<aLi.length;i++){
            aImg[i].className='';
            aLi[i].className='';
        };
        aImg[iol].className='girls';
        aLi[iol].className='taggirl';
    }
// girl onmouseover
    for(var i=0; i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function () {
            iol=this.index;
            tag();
        };
    };

// girl setInterval
    var ban=setInterval (function() {
        iol++;
        if ( iol>aLi.length -1)iol=0;
        console.log(aLi.length -1);
        tag();
    },1000)

    // stop
    oGirl.onmouseover=function () {
        clearInterval(ban)
    };
    // move
    oGirl.onmouseout=function () {
        ban=setInterval( function(){
            iol++;
            if ( iol>aLi.length-1)iol=0;
            tag();
        },1000);
    };
    // best end
};




