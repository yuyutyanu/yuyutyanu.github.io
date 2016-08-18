$('#portfolio_button_bottom').click(function(){
  $('#chanu').fadeOut();
  setTimeout(function(){$('#portfolio').fadeIn("slow")},500);
})

$('#portfolio_button_top').click(function(){
  $('#portfolio').fadeOut();
  setTimeout(function(){$('#chanu').fadeIn()},500);
})

$('#contact_button_bottom').click(function(){
  $('#chanu').fadeOut();
  setTimeout(function(){$('#contact').fadeIn("slow")},500);
})

$('#contact_button_top').click(function(){
  $('#contact').fadeOut();
  setTimeout(function(){$('#chanu').fadeIn()},500);
})

//$('.content_back1').click(function(){
//  window.location.href='';
//})
//$('.content_back2').click(function(){
//  window.location.href='';
//})

//$('.content_back3').click(function(){
//  window.location.href='';
//})
$('.content_back4').click(function(){
  window.location.href='./photochecker/index.php';
})
