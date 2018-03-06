console.log('\'Allo \'Allo!');

$('.js-mobile-menu').on('click', function () {
  $('.header-menu').stop().slideToggle();
});
