/* var sliderWidth = 280;
var slider = $('.price__promo-slider');
var sliderCount = $('.price__promo-slide', slider).length;
slider.width(sliderCount * sliderWidth);

var currentSlide = 1;


$('.slider-pagination__control').click(function () {
    if (currentSlide > sliderCount) {
        $('.price__promo-slider').animate({
            left: '+=' + sliderWidth
        }, 280);
        currentSlide -= 1;
    }
    });

    $('.slider-pagination__control').click(function () {
    if (currentSlide < sliderCount) {
        $('.price__promo-slider').animate({
            left: '-=' + sliderWidth
        }, 500);
        currentSlide += 1;
    }
});
