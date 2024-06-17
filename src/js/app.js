import { addColor, removeColor } from './features.js';

const titles = document.querySelectorAll('.title');
const texts = document.querySelectorAll('.text');
const images = document.querySelectorAll('.line-image');

console.log(images);

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  observer: true,
  observeParents: true,
  spaceBetween: 20,
});

console.log(swiper);

if (swiper.activeIndex === 0) {
  addColor(titles[0], texts[0]);
}

swiper.on('slideChange', function (e) {
  if (swiper.activeIndex === 1) {
    images[0].src = '../images/gray-line.svg';
    images[2].src = '../images/gray-line.svg';
    images[3].src = '../images/gray-line.svg';
    images[1].src = '../images/orange-line.svg';
    removeColor(titles[0], titles[2], titles[3], texts[0], texts[2], texts[3]);
    addColor(titles[1], texts[1]);
  }
  if (swiper.activeIndex === 2) {
    images[0].src = '../images/gray-line.svg';
    images[1].src = '../images/gray-line.svg';
    images[3].src = '../images/gray-line.svg';
    images[2].src = '../images/orange-line.svg';
    removeColor(titles[0], titles[1], titles[3], texts[0], texts[1], texts[3]);
    addColor(titles[2], texts[2]);
  }
  if (swiper.activeIndex === 3) {
    images[0].src = '../images/gray-line.svg';
    images[1].src = '../images/gray-line.svg';
    images[2].src = '../images/gray-line.svg';
    images[3].src = '../images/orange-line.svg';
    removeColor(titles[2], titles[1], titles[0], texts[2], texts[1], texts[0]);
    addColor(titles[3], texts[3]);
  }
  if (swiper.activeIndex === 0) {
    images[1].src = '../images/gray-line.svg';
    images[2].src = '../images/gray-line.svg';
    images[3].src = '../images/gray-line.svg';
    images[0].src = '../images/orange-line.svg';
    addColor(titles[0], texts[0]);
    removeColor(titles[1], titles[2], titles[3], texts[1], texts[2], texts[3]);
  }
});
