$(document).ready(function(){
	var sliderWidth = screen.width;
	var slider = $('.reviews__slider');
	var $listItems = $('.reviews-pagination__controls i');
	var sliderCount = $('.reviews__slide').length;
	slider.width(sliderCount * sliderWidth);

	 $listItems.click(function(){
    $listItems.removeClass('reviews-pagination__control--active');
    $(this).addClass('reviews-pagination__control--active');
    var activeLink=$(this);
  });

  $('.reviews-pagination__controls i').bind('click',function() {
   $('.reviews__slider').animate({left: '-' + sliderWidth * $(this).index() },1000);
});
});
