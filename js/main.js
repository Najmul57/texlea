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

    // scroll to top button 
document.addEventListener("DOMContentLoaded", function() {

    let scrollTOTopBtn = document.querySelector('.scroll-top')
  
    window.addEventListener("scroll", function() {
      // Show or hide the button based on the scroll position
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTOTopBtn.classList.add("open");
      } else {
        scrollTOTopBtn.classList.remove("open");
      }
    });
  
    scrollToTopBtn.addEventListener("click", function() {
      // Scroll to the top with smooth animation
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  
    
    


})(jQuery);