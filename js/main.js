(function ($) {
    "use strict";

    //category toggle
    var categoryToggles = document.querySelectorAll('.categoryToggle');

    categoryToggles.forEach(function (toggle) {

        toggle.addEventListener('click', function (event) {

            event.preventDefault();

            var categoryList = toggle.nextElementSibling;

            if (categoryList.style.display === 'none' || categoryList.style.display === '') {
                categoryList.style.display = 'block';
            } else {
                categoryList.style.display = 'none';
            }

            var subcategoryLists = categoryList.querySelectorAll('.mobile__subcategory');

            subcategoryLists.forEach(function (subcategoryList) {

                if (subcategoryList.style.display === 'none' || subcategoryList.style.display === '') {
                    subcategoryList.style.display = 'block';
                } else {
                    subcategoryList.style.display = 'none';
                }
            });
        });
    });

    // home slider
    $('.slider__active').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    // testimonial-active
    $('.certificate-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //magnific popup
    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });

    // scroll to top button 
    document.addEventListener("DOMContentLoaded", function () {

        let scrollTOTopBtn = document.querySelector('.scroll-top')

        window.addEventListener("scroll", function () {
            // Show or hide the button based on the scroll position
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTOTopBtn.classList.add("open");
            } else {
                scrollTOTopBtn.classList.remove("open");
            }
        });

        scrollToTopBtn.addEventListener("click", function () {
            // Scroll to the top with smooth animation
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    });

    // office 
    $('.office__active').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        autoplay:true,
        arrows:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
          


})(jQuery);