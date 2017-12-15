$(function(){
    var myMusic = document.getElementById('music');
    var oXuan = document.getElementById('play');
    var oTu = oXuan.getElementsByTagName('i')[0];
    var deg = 0;
    var Delay = null;
    zhuan();
    function zhuan (){
        clearInterval(Delay);
        Delay = setInterval(function(){
            deg<1080?deg+=5:deg=0;
            oTu.style.transform = 'rotate('+deg+'deg)';
        },1000/60)  
    }
    myMusic.play();
    $('#play').click(function(){
        if(myMusic.paused){
            myMusic.play();
            clearInterval(Delay);
            zhuan();
             $('#play').css('background-image','url(img/music_off.gif)');
        }else{
            myMusic.pause();
            clearInterval(Delay);
            oTu.style.transform = 'rotate('+0+'deg)';
            $('#play').css('background-image','url(img/music_off2.png)');
        }
    })
    $('#rotate').attr('transform','rotate(45reg)');

    var oHua = document.getElementById('hua');
    var Long =oHua.length;
    var i =10;
    var Delays = null;
    hua();
    for(var j=0;j<Long;j++){
        var k = this.index;
        
    }
    function hua (){
        clearInterval(Delays);
        Delays = setInterval(function(){
            i<80?i+=1:i=10;
            oHua.style.bottom = i+'px';
            oHua.style.opacity = 10/i;
        },1000/60)  
    }
})