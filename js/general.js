
jQuery(document).ready(function() {
    // mobile-menu
    jQuery('.site-header .hamburger-icon').click(function(){
        jQuery('body').toggleClass('open-menu');
    });
});


jQuery(window).resize(function() {
    if (jQuery(window).innerWidth() > 767) {
        jQuery('body').removeClass('open-menu');
    }
});


//javascript



