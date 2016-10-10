$(document).ready(function(){
	var sliderWidth = screen.width - 40;
	var slider = $('.price__promo-slider--js');
	var $listItems = $('.slider-pagination__controls i');
	var sliderCount = $('.price__promo-slide--js', slider).length;
	slider.width(sliderCount * sliderWidth);

	 $listItems.click(function(){
    $listItems.removeClass('slider-pagination__control--active');
    $(this).addClass('slider-pagination__control--active');
    var activeLink=$(this);
  });

  $('.slider-pagination__controls i').bind('click',function() {
   $('.price__promo-slider--js').animate({left: '-' + sliderWidth * $(this).index() },1000);
});
});
