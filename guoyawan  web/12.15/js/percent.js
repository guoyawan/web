window.onload=function () {

    var oUse=document.getElementById('use');
    var oOff=document.getElementById('off');
    var oBack=document.getElementById('back');
    var oArs=document.getElementById('ars');
    var oLi=oArs.getElementsByTagName('li');

    oUse.onclick=function () {
        oBack.style.display='block';
    };
    oOff.onclick=function () {
        oBack.style.display='none';
    };

    for(var a=0; a<oLi.length;a++){
        oLi[a].onmouseover=function () {
            for(var a=0; a<oLi.length;a++){
                oLi[a].className='playf1'
            };
            this.className='playf ';
        };
    };
};




