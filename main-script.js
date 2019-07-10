$( document ).ready(function() {
    console.log( "ready!" );
});

var timeout = null;
$(document).on('mousemove', function() {
    if (timeout !== null) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function() {
        $('.navbar').css({'transform' : 'translateY(0)'});
        $('#title-header').css({'opacity' : '1'});
    }, 1000);
});
$(function ()
{
    $("#main-cover").mouseenter(function () {


        $('#bgVideo').css({'transform': 'scale(1.8)'});
    }).mouseleave(function (){
        $('#bgVideo').css({'transform': 'scale(1.2)'});
    }).mousemove(function(e){
        $('.navbar').css({'transform' : 'translateY(-100%)'});
        $('#title-header').css({'opacity' : '.7'});
        $('#bgVideo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()/1.1) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()/1.1) * 100 +'%'});
    });
});

$(document).scroll(function() {
    $('.navbar').css({'transform' : 'translateY(0)'});
});

// $('.tile')
// // tile mouse actions
// .on('mouseover', function(){
//   $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
// })
// .on('mouseout', function(){
//   $(this).children('.photo').css({'transform': 'scale(1)'});
// })
// .on('mousemove', function(e){
//   $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
// })
// // tiles set up
// .each(function(){
//   $(this)
//     // add a photo container
//     .append('<div class="photo"></div>')
//     // some text just to show zoom level on current item in this example
//     .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
//     // set up a background image for each tile based on data-image attribute
//     .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
// })