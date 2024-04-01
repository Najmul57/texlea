(function ($) {
    "use strict";

    // home slider
    $('.slider__active').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        arrows:false,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    


})(jQuery);