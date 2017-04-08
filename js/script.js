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

  // slider 4 item (product all)
  if($("#product-slider-1").length) {
    $("#product-slider-1").owlCarousel({
      singleItem: true,
      autoPlay: true
    })
  }

  // slider 4 item (product category)
  var slider4 = $("#product-slider-4");
  if(slider4.length) {
    slider4.owlCarousel({
      items: 4,
      itemsTablet: [799,3],
      itemsMobile: [480,1],
      pagination: false,
      navigationText: false,
      navigation: true,
      autoPlay: false,
      slideSpeed: 800,
      afterInit: function(el) {
        el.find(".owl-prev").append('<i class="hzi-font hzi-Left-Arrow"></i>');
        el.find(".owl-next").append('<i class="hzi-font hzi-Right-Arrow"></i>');
      }
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

  // Sidebar collapsible (left Sidebar/products, products-list)
  $('.sidebar-header.collapse').on('click', function() {
    $(this).next().slideToggle();
    var icon = $(this).find('.toggle');
    var currentIconClass = icon.hasClass('more-icon') ? 'more-icon' : 'down-icon';
    var newIconClass = icon.hasClass('more-icon') ? 'down-icon' : 'more-icon';
    icon.removeClass(currentIconClass).addClass(newIconClass);
  })

  // Sidebar menu level 2 (products)
  $('.sidebar-body .level2').children('a').on('click', function(e) {
    e.preventDefault();
    var sidebarBody = $(this).closest('.sidebar-body');
    $(this).parent().siblings().slideUp();
    $('.sidebar-item.all').slideDown();
    $(this).parent().css('display','block');
    sidebarBody.find('.sidebar-item-label').removeClass('selected');
    $(this).addClass('selected');
    $(this).parent().find('.sidebar__level2').slideDown();
    $(this).parent().find('.sidebar-item').slideDown();
  })

  $('.sidebar__level2 .sidebar-item').children('a').on('click', function() {
    var sidebarBody = $(this).closest('.sidebar-body');
    sidebarBody.find('.sidebar-item-label').removeClass('selected');
    $(this).parent().siblings().slideUp();
    $(this).addClass('selected');
  })

  $('.sidebar-body .all').on('click', function() {
    var sidebarBody = $(this).closest('.sidebar-body');
    sidebarBody.children('ul').children('.sidebar-item').slideDown();
    sidebarBody.find('.sidebar-item-label').removeClass('selected');
    $(this).find('.sidebar-item-label').addClass('selected');
    sidebarBody.find('.sidebar__level2').slideUp();
  })

  // facet dropdown
  $('.btn-group.facet-action-list').on('click', function() {
    $(this).parent().toggleClass('currently-open');
    $(this).children('.sidebar-item-label').addClass('selected');
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
      $('#zBottomProducts').removeClass('full');
    } else {
      $('#lbMain').addClass('expanded');
      $('#lbActions .expand-toggle').addClass('active');
      $('#zBottomProducts').addClass('full');
    }
  });

  // click on white square
  $('.image-tags-tag-bounds').on('click', function() {
    $('#lbImageContainer').css('top', '-125px');
    $('#zBottomProducts').css('bottom', 0);
  })
  $('#zBottomProducts .product-tag-info-close').on('click', function() {
    $('#lbImageContainer').css('top', 0);
    $('#zBottomProducts').css('bottom', '-200px');
  })

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

  // hover on photoMeta (photos-3)
  $('.browseListBody .photoMeta').mouseover(function() {
    $(this).closest('.whiteCard').find('.product-desc').css({
      'opacity': 1,
      'background-color': 'rgba(255,255,255,.9)',
      'color': '#333'
    });
  })
  $('.browseListBody .photoMeta').mouseout(function() {
    $(this).closest('.whiteCard').find('.product-desc').css('opacity', 0);
  })

  // sizes buttons (product)
  $('.sizes-buttons a').on('click', function() {
    $('.sizes-buttons a').removeClass('active');
    $(this).addClass('active');
  })

  // profile tabs (user)
  $('.profile-tabs li').on('click', function() {
    $('.profile-tabs li').removeClass('selected');
    $(this).addClass('selected');
  })

  // about-houzz-tabs (inTheNews)
  $('.about-houzz-tabs li').on('click', function() {
    $('.about-houzz-tabs li').removeClass('selected');
    $(this).addClass('selected');
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