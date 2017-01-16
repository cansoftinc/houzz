jQuery(document).ready(function($) {
  console.log('ready');
  $("#homeSlider").owlCarousel({
    singleItem: true,
    autoPlay: true,
    pagination: false,
    transitionStyle: 'fade'
  })
})