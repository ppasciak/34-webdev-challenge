$(document).ready(function(){

  /*BURGER ANIMATE AND MENU SLIDE*/
$('.burg').on('click', function() {
	$('.bar').toggleClass('animate');
  $('.menu').toggleClass('visible');
});

$('nav a').on('click',function(){
  $('.bar').toggleClass('animate');
  $('.menu').toggleClass('visible');
});
  /*CONTACT SLIDE*/
$('.anchor').on('click', function() {
	$('.contact').toggleClass('visible');
});

/*BACK TO TOP*/
$('.toTop').on('click', function(e) {
  e.preventDefault();
	$('html, body').animate({scrollTop : 0}, 500);
});

});
