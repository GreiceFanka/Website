$(function(e){$('#home').click(function(e){
    $('html,body').animate({scrolltop:$('#home').offset().top},800);
                });
    $('#habilities').click(function(e){
            $('html,body').animate({scrolltop:$('#habilities').offset().top},800);
                });
    $('#aboutme').click(function(e){
            $('html,body').animate({scrolltop:$('#aboutme').offset().top},800);
                });
    $('#contact').click(function(e){
            $('html,body').animate({scrolltop:$('#contact').offset().top},800);
                });
    });

    $('.navbar-nav li a').click(function() {
        if (!$(this).parent().hasClass('dropdown')) {
            $('.navbar-collapse').collapse('hide'); 
            }
    });

function changePhoto(type){
    if(type == 1){
        archive = "_img/foto04.jpg";
    }
    if(type == 2){
        archive = "_img/foto00.jpeg";
    }
    document.getElementById("foto").src = archive;
}

var pos = 0;
var speed = 250;
var str = document.getElementById('welcome').innerText;

document.getElementById('welcome').innerText = '';

function write(){
    if(pos < str.length){
      document.getElementById('welcome').innerText += str.charAt(pos);pos++;
        setTimeout(write,speed);
    } else {
       setTimeout(speed) 
    }
}
setTimeout(write,speed);

function showObject (){
    $(function(){
         $('.icone').fadeOut(500);
         $('.icone').fadeIn(8000);
        })
    }; 