/* ==============================
    Accommodation section
===============================*/

$(function () {
    /* activation animation on scroll */
    new WOW().init();
});

/* ==============================
    Photo gallery section
===============================*/

$(function () {
    $("#photo-gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ==============================
     Testimonials section
===============================*/

$(function () {
    $("#visitors-testimonials").owlCarousel({
        items: 1,
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 900,
        loop: true
    });
});

/* ==============================
    Stats section
===============================*/
$(function () {
    $('.counter').counterUp({
        delay: 100,
        time: 6000
    });
});

/* ==============================
    Navigation section
===============================*/
$(function () {
    $(window).scroll(function() {
        if($(this).scrollTop() < 50) {
           //hide navbar
        } else {
            //show navbar
        }
    });
        });
  
//smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
           scrollTop: $(section).offset().top - 60
        }, 1250);
    });
        });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  