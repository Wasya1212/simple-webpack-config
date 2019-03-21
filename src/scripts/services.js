import $ from 'jquery';
import jQuery from 'jquery';

import './libs/slick/slick/slick.js';
import './libs/slick/slick/slick.css';

$(document).ready(() => {
  const slider = $('.services-slider').slick({
    arrows: false,
    fade: true,
    draggable: false
  });

  $('.services-names-slider li:first-child').addClass('slick-active');

  $('.services-names-slider li').click(function(e) {
    $('.services-slider').slick('slickGoTo', $('.services-names-slider li').index(this));
    $('.slick-active').removeClass('slick-active');
    $(this).addClass('slick-active');
  });
});
