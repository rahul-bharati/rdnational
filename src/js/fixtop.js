$(document).ready()
{
  var screenSize = $(window).width();
  var fixmeTop = $('.header-main-mobile').offset().top + $('.header-main-mobile').height();
  if(screenSize<992)
  {
      $(window).scroll(function(){
          var currentScroll = $(window).scrollTop();
          if (currentScroll >= fixmeTop)
          {
              $('.header-main-mobile').addClass('fixed-top');
              $('.header-main-mobile').css({
                  animation: 'transitionTop .5s',
                  position: 'fixed',
                  top: '0',
                  left:'0'
              });
              $('.afterfix').css({
                  marginTop: fixmeTop
              });
          }
          if (currentScroll <= fixmeTop)
          {
              $('.header-main-mobile').css({
                  animation: 'none',
                  position: 'static'
              });
              $('.afterfix').css({
                  marginTop: '0'
              });
          }
      });
  }
}
