import video from '../assets/videos/green_cell.mp4';

import $ from 'jquery';
import jQuery from 'jquery';

import anime from 'animejs';

import './libs/slick/slick/slick.js';
import './libs/slick/slick/slick.css';

$(document).ready(() => {
  $('.partners-slider').slick({
    arrows: false,
    fade: false,
    draggable: true,
    dots: true,
    slidesToShow: $(window).width() < 720 ? 1 : 4
  });

  $('.clients-slider').slick({
    arrows: false,
    fade: true,
    draggable: false
  });

  $('.clients-names-slider li:first-child').addClass('slick-active');

  $('.clients-names-slider li').click(function(e) {
    $('.clients-slider').slick('slickGoTo', $('.clients-names-slider li').index(this));
    $('.slick-active').removeClass('slick-active');
    $(this).addClass('slick-active');
  });

  $('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true
  });

  hideAllTopSliderInfos();
  showTopSliderInfo(0);

  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    showTopSliderInfo();
  });
  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    hideTopSliderInfo();
  });
});

function showTopSliderInfo(duration = 1500) {
  anime({
    targets: '.slick-current .text a',
    translateY: 0,
    delay: 200,
    duration: duration
  });
  anime({
    targets: '.slick-current .text p',
    translateY: 0,
    delay: 150,
    duration: duration
  });
  anime({
    targets: '.slick-current .text h3',
    translateY: 0,
    delay: 100,
    duration: duration
  });
}

function hideTopSliderInfo() {
  anime({
    targets: ['.slick-slide .text p', '.slick-slide .text h3', '.slick-slide .text a'],
    translateY: 500,
    duration: 0
  });
}

function hideAllTopSliderInfos() {
  anime({
    targets: ['.slick-slide .text p', '.slick-slide .text h3', '.slick-slide .text a'],
    translateY: 500,
    duration: 0
  });

}
