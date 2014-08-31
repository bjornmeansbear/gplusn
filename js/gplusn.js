
// scroll to content when you click on the logo. - retrieved from http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$("header nav a").click(function(event){
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
  $(this).parent().siblings().removeClass('active');
  $(this).parent().addClass('active');
});
