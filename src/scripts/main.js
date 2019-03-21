import $ from 'jquery';
import jQuery from 'jquery';

$('.header .switch.btn').click(function(event) {
  $('.header').toggleClass('disabled');

  if (!$('.header').hasClass('disabled')) {
    $('html').css('overflow', 'hidden');
  } else {
    $('html').css('overflow', 'auto');
  }
});
