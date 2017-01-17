jQuery(document).ready(function($) {
  console.log('ready');

  // carousel
  $("#homeSlider").owlCarousel({
    singleItem: true,
    autoPlay: true,
    pagination: false,
    transitionStyle: 'fade'
  });
  $("#square-slider-1").owlCarousel({
    singleItem: true,
    autoPlay: true
  });
  $("#square-slider-2").owlCarousel({
    singleItem: true,
    autoPlay: true
  })

  // navigation level 2
  var houzzHeader = $('.houzz-header');
  var houzzHeader2 = $('.houzz-header-secondary');
  // scroll to show/hide navigation
  $(window).scroll(function () {
    if($(document).scrollTop() > 0 ) {
      houzzHeader2.css('top', '-43px');
    } else {
      houzzHeader2.css('top', 0);
    }
  });

  // hover to houzz-header to show nav
  houzzHeader.mouseover(function(){
    houzzHeader2.css('top', 0);
  });

  // home navigation level 3
  var navItem = $('#navHeader li.header-nav-room');
  navItem.mouseover(function(){
    $(this).addClass('menu-active');
  });
  navItem.mouseout(function(){
    $(this).removeClass('menu-active');
  });

  // mobile menu
  $('.hzi-MH-Menu').on('click', function() {
    $('body').addClass('sidenav-in');
  })
  $('.hzi-MH-Close').on('click', function() {
    $('body').removeClass('sidenav-in');
  })

  // Back to top
  var toTop = jQuery("#stickyFooterActions");
  toTop.hide();
  jQuery(function() {
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > 200) {
              toTop.fadeIn();
          } else {
              toTop.fadeOut();
          }
      });
      // scroll body to 0px on click
      toTop.on("click", function() {
          jQuery("body,html").animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
})