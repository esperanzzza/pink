$(document).ready(function(){
	var sliderWidth = screen.width;
	var slider = $('.reviews__slider');
	var $arrowNav = $('.reviews-pagination__arrows i');
	var sliderCount = $('.reviews__slide').length;
	slider.width(sliderCount * sliderWidth);

	$arrowNav.click(function(){
	 var activeLink=$(this);
	});
	$('.reviews-pagination__arrows i').bind('click',function() {
 $('.reviews__slider').animate({left: '-' + sliderWidth * $(this).index() },1000);
});
});
