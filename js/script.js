(function ($) {
    var typed = new Typed('span.txt-rotate', {
        strings: ["Software Developer | .Net | C#"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });
})(jQuery);

$(document).ready(function () {
    $('.projects-wrapper').isotope({
        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function () {
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        return false;
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enable: true,
            navigateByImgClick: true
        }
    });

});