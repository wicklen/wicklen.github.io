$(function(){

   "use strict";

   var topoffset = 10; //varible for menu height
   var slideqty = $("#featured .item").length;
   var wheight = $(window).height(); //get the height of the window

   $('.fullheight').css('height', wheight); //sett to window

   //replace IMG inside carousel with a background image

   $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
   });

   //adjust height of .fullheight elements on window resize

   $(window).resize(function() {
        var wheight = $(window).height(); //get the height of the window
        $('.fullheight').css('height', wheight); //sett to window
   });


   //Active Scrollspy
   $("body").scrollspy({
        target: "header .navbar",
        offsett: topoffset
   });
   //Add an inbody class to nav when scrollspy event fires on reload

      var hash = $(this).find("li.active a").attr("href");
          if(hash !== "#featured"){
              $("header nav").addClass("inbody");
          } else {
              $("header nav").removeClass("inbody");
          }
// Close hamburger-nav


  $('.navbar-collapse a').click('li', function() {
  var navbar_toggle = $('.navbar-toggle');
  if (navbar_toggle.is(':visible')) {
    navbar_toggle.trigger('click');
}});
        jQuery('body').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length === 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});



   //Add an inbody class to nav when scrollspy event fires
    $(".navbar-fixed-top").on("activate.bs.scrollspy", function() {

        var hash = $(this).find("li.active a").attr("href");
        if(hash !== "#featured"){
            $("header nav").addClass("inbody");
        } else {
            $("header nav").removeClass("inbody");
        }
    });

    //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

//Automatically generate carousel indicators

    for (var i = 0; i < slideqty; i++) {
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
        insertText += '></li>';
        $('#featured ol').append(insertText);
    }



   $('#featured').carousel({
      interval: '7000',
      pause: true
    });

//typed.js cursor



      $(".element").typed({
        strings: ["Former chef", "Turning to the web."],
        typeSpeed: 100
      });



});
