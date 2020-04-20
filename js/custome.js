$(function () {
    
    //    preloader

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    //    here js for sticky menubar

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }
    });

    //==== animate wow js

    var wow = new WOW(
        {
          boxClass:     'wow',
          animateClass: 'animated',
          offset:       0,
          mobile:       true,
          live:         true,
          scrollContainer: null,
          resetAnimation: true,  
        }
      );
      wow.init();

    //==== Show or hide the sticky back_to_top_section

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 500) {
            $('.back_to_top').fadeIn(200)
        } else {
            $('.back_to_top').fadeOut(200)
        }
    });

    $('.back_to_top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    });

});
