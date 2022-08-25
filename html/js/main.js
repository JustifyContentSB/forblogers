"use strict";

$(document).ready(function () {
  // Your code here
  pictureSlider();
  inputWidth();
}); // Your functions here

function pictureSlider() {
  var swiper = new Swiper(".picture__slider", {
    clickable: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
} // function inputWidth() {
//    let elements = document.querySelectorAll('.field');
//    let inputs = [];
//    elements.forEach(function (element, index) {
//       inputs[index] = (element, elements.setAttribute('size', elements.getAttribute('placeholder').length););
//    })
// }


function inputWidth() {
  var elements = document.querySelectorAll('.field');
  elements.forEach(function (element, index) {
    element.style.width = element.getAttribute('placeholder').length + 'ch';
  });
}