$(document).ready(function() {
  $('.main-nav__menu-toggle').click(function() {
    $('.main-nav__site-navigation').show('slow');
    $('.main-nav__menu-toggle').hide('slow');
    $('.main-nav__menu-toggle--close').show('slow');
    $('.main-header__wrapper').css( "background-color", "#283645" );
  });
    $('.main-nav__menu-toggle--close').click(function() {
      $(this).hide('slow');
      $('.main-nav__site-navigation').hide('slow');
      $('.main-nav__menu-toggle').show('slow');
      $('.main-header__wrapper').css( "background-color", "rgba(0, 0, 0, 0.3)" );
  });
});
