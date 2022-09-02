"use strict";

$(document).ready(function () {
   // Your code here
   pictureSlider()
   shopSlider()
   inputWidth()
   compareSlider()
   compareManage()
   menuToggle()
});

// Your functions here

function pictureSlider() {
   let pictureSwiper = new Swiper(".picture__slider", {
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   });
}

function shopSlider() {
   let shopSwiper = new Swiper(".shop__slider-inner", {
      pagination: {
         el: ".shop__pagination",
         clickable: true,
      },
   });
}

function compareManage() {
   if ($(window).width() < 768) {
      let compareSwiper = new Swiper(".compare__manage-swiper", {
         slidesPerView: "auto",
         spaceBetween: 12,
         pagination: {
            el: ".compare__manage-pagination",
            clickable: true,
         },
      });
   }
}

function compareSlider() {
   let compareSwiper = new Swiper(".compare__slider-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
         nextEl: ".compare__slider-next",
         prevEl: ".compare__slider-prev",
      },
      breakpoints: {
         768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
         },
         1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            speed: 700,
         },
      },
   });
}

function inputWidth() {
   let elements = document.querySelectorAll('.field');

   elements.forEach(function (element, index) {
      element.style.width = element.getAttribute('placeholder').length + 'ch';
   });
}

function menuToggle() {
   $('.header__burger').on('click', function (e) {
      e.preventDefault();
      $('.menu').addClass('menu--active')
      $('.overlay').addClass('overlay--active')
      $('body').addClass('no-scroll')
   })

   $('.menu__close').on('click', function (e) {
      e.preventDefault();
      $('.menu').removeClass('menu--active')
      $('.overlay').removeClass('overlay--active')
      $('body').removeClass('no-scroll')
   })

   $('.overlay').on('click', function (e) {
      e.preventDefault();
      $('.menu').removeClass('menu--active')
      $('.overlay').removeClass('overlay--active')
      $('body').removeClass('no-scroll')
   })
}