import $ from 'jquery';
import jQuery from 'jquery';

import anime from 'animejs';
import mixitup from 'mixitup';

import './libs/slick/slick/slick.js';
import './libs/slick/slick/slick.css';

$(document).ready(() => {
  $('.about-slider').slick({
    arrows: true,
    fade: false,
    draggable: false,
    dots: false
  });
});

const mixer = mixitup('.projects-mixer', {
  selectors: {
    target: '.mix-target'
  }
});
