jQuery(document).ready(function($) {
  console.log('ready');
  // html5 validate
  if($('.z-validate').length) {
    $.validate({
      modules : 'html5'
    });
  }

  // carousel (home page)
  if($("#homeSlider").length) {
    $("#homeSlider").owlCarousel({
      singleItem: true,
      autoPlay: true,
      pagination: false,
      transitionStyle: 'fade'
    });
  }

  if($("#square-slider-1").length) {
    $("#square-slider-1").owlCarousel({
      singleItem: true,
      autoPlay: false
    });
  }

  if($("#square-slider-2").length) {
    $("#square-slider-2").owlCarousel({
      singleItem: true,
      autoPlay: true
    })
  }

  if($("#product-slider-1").length) {
    $("#product-slider-1").owlCarousel({
      singleItem: true,
      autoPlay: true
    })
  }

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

  // mobile menu (all pages)
  $('.hzi-MH-Menu').on('click', function() {
    $('body').addClass('sidenav-in');
  })
  $('.hzi-MH-Close').on('click', function() {
    $('body').removeClass('sidenav-in');
    var sideNav = $('.sidenav.level-1').removeClass('level-2');
    sideNav.find('.sidenav-section').removeClass('section-active');
    sideNav.find('.sidebar-nav-item').removeClass('menu-active');
  })
  $('.hzi-MH-Search').on('click', function() {
    $(this).closest('#navSearch').toggleClass('menu-active');
  })
  $('.sidebar-nav-item .menu-title').on('click', function(e) {
    e.preventDefault();
    $('.sidenav.level-1').addClass('level-2');
    $(this).closest('.sidebar-nav-item').addClass('menu-active');
    $(this).closest('.sidenav-section').addClass('section-active');
  })
  $('.sidenav-back').on('click', function() {
    var sideNav = $('.sidenav.level-1').removeClass('level-2');
    sideNav.find('.sidenav-section').removeClass('section-active');
    sideNav.find('.sidebar-nav-item').removeClass('menu-active');
  })

  // Sidebar collapsible (left Sidebar)
  $('.sidebar-header.collapse').on('click', function() {
    $(this).next().slideToggle();
    var icon = $(this).find('.toggle');
    icon.addClass('test');
    var currentIconClass = icon.hasClass('more-icon') ? 'more-icon' : 'down-icon';
    var newIconClass = icon.hasClass('more-icon') ? 'down-icon' : 'more-icon';
    icon.removeClass(currentIconClass).addClass(newIconClass);
  })

  // facet dropdown
  $('.btn-group.facet-action-list').on('click', function() {
    $(this).parent().toggleClass('currently-open');
  })

  // light box (index, photos)
  $('.zLightBox').on('click', function() {
    $('#lbRoot').removeClass('hidden');
    $('body').addClass('showlb');
  });
  $('#lbClose').on('click', function() {
    $('#lbRoot').addClass('hidden');
    $('body').removeClass('showlb');
  })

  var lbImage = $('#lbImageContainer');
  lbImage.mouseover(function(){
    $('#lbActions').removeClass('fade-out');
  });
  lbImage.mouseout(function(){
    $('#lbActions').addClass('fade-out');
  });

  $('#lbActions .expand-toggle').on('click', function() {
    if($('#lbMain').hasClass('expanded')) {
      $('#lbMain').removeClass('expanded');
      $('#lbActions .expand-toggle').removeClass('active');
    } else {
      $('#lbMain').addClass('expanded');
      $('#lbActions .expand-toggle').addClass('active');
    }
  });

  // filter modal (photos)
  $('#filterButton').on('click', function() {
    $('body').addClass('modal-open');
    $('.overlay').fadeIn();
    $('.filterModal').fadeIn();
  })
  $('.modal-header').on('click', function() {
    $('body').removeClass('modal-open');
    $('.overlay').fadeOut();
    $('.filterModal').fadeOut();
  })

  // z Image Tab (product-single)
  $('.zImageTab .altImagesDiv img').on('click', function() {
    var index = $(this).data('thumb');
    $('.zImageTab .altImagesDiv img').removeClass('selected');
    $(this).addClass('selected');
    $('.zImageTab .mainImageWrap img').removeClass('show');
    $(index).addClass('show');
  })

  // Back to top
  var toTop = jQuery('#stickyFooterActions');
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
    toTop.on('click', function() {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
})