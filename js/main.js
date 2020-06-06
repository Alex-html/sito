$(document).ready(function () {
        $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.carousel').carousel();
});

$(document).ready(function(){
    $('.pushpin').pushpin();
});

$('.sidenav li').click(() => {
  $('.sidenav').sidenav('close');
})
$("#schermata_caricamento").fadeOut(5000);
$("#schermata_caricamento1").fadeOut(5000);
$("#loading_screen2").fadeOut(4500);
$("#loading_screen1").fadeOut(5000);
