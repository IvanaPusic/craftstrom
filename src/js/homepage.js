import { addColor, removeColor } from './features.js';
const titles = document.querySelectorAll('.desktop-title');
const texts = document.querySelectorAll('.desktop-text');
const images = document.querySelectorAll('.line-image');

const mobileTitles = document.querySelectorAll('.mobile-title');
const mobileTexts = document.querySelectorAll('.mobile-text');
const mobileImages = document.querySelectorAll('.mobile-line-image');

const arrow1 = document.querySelector('.arrow-1');
const arrow2 = document.querySelector('.arrow-2');
const arrow3 = document.querySelector('.arrow-3');
const arrow1Img = document.querySelector('.arrow-1-img');
const arrow2Img = document.querySelector('.arrow-2-img');
const arrow3Img = document.querySelector('.arrow-3-img');
let solarImg = document.querySelector('.solar-type-img');
const content1 = document.querySelector('.content-1');
const content2 = document.querySelector('.content-2');
const content3 = document.querySelector('.content-3');
const solarSystemTitles = document.querySelectorAll('.solar-system-title');
const onGridImgContainer = document.querySelector('.on-grid-img-container');
const onGridNightImgContainer = document.querySelector('.on-grid-night-img-container');
const offGridImgContainer = document.querySelector('.off-grid-img-container');

onGridImgContainer.style.display = 'none';
onGridNightImgContainer.style.display = 'none';
offGridImgContainer.style.display = 'none';

const swiper = new Swiper(".mySwiper", {

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  observer: true,
  observeParents: true,
  spaceBetween: 20,
});
const mobileSwiper = new Swiper(".mobileSwiper", {
    slidesPerView:1.5,

});

   const learnMoreSwiper = new Swiper('.learnMore', {
   });
    const learnMoreDesktopSwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      },
      observer: true,
      observeParents: true,
      breakPoints: {
        //  768: {
        //   slidesPerView: 2,
        //   spaceBetween: 10,
        // },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 10,
        // },
      }
    });
    const blogSwiper = new Swiper('.blogSwiper', {
      slidesPerView:1,
      breakpoints: {
        768: {
          slidesPerView:2,
        }
      }
    });
if (swiper.activeIndex === 0 || mobileSwiper.activeIndex === 0) {
  addColor(titles[0], texts[0]);
  addColor(mobileTitles[0],mobileTexts[0]);
}

swiper.on('slideChange', function (e) {
  if (swiper.activeIndex === 1) {
    images[0].src = './src/images/gray-line.svg';
    images[2].src = './src/images/gray-line.svg';
    images[3].src = './src/images/gray-line.svg';
    images[1].src = './src/images/orange-line.svg';
    removeColor(titles[0], titles[2], titles[3], texts[0], texts[2], texts[3]);
    addColor(titles[1], texts[1]);
  }
  if (swiper.activeIndex === 2) {
    images[0].src = './src/images/gray-line.svg';
    images[1].src = './src/images/gray-line.svg';
    images[3].src = './src/images/gray-line.svg';
    images[2].src = './src/images/orange-line.svg';
    removeColor(titles[0], titles[1], titles[3], texts[0], texts[1], texts[3]);
    addColor(titles[2], texts[2]);
  }
  if (swiper.activeIndex === 3) {
    images[0].src = './src/images/gray-line.svg';
    images[1].src = './src/images/gray-line.svg';
    images[2].src = './src/images/gray-line.svg';
    images[3].src = './src/images/orange-line.svg';
    removeColor(titles[2], titles[1], titles[0], texts[2], texts[1], texts[0]);
    addColor(titles[3], texts[3]);
  }
  if (swiper.activeIndex === 0) {
    images[1].src = './src/images/gray-line.svg';
    images[2].src = './src/images/gray-line.svg';
    images[3].src = './src/images/gray-line.svg';
    images[0].src = './src/images/orange-line.svg';
    addColor(titles[0], texts[0]);
    removeColor(titles[1], titles[2], titles[3], texts[1], texts[2], texts[3]);
  }
});

mobileSwiper.on('slideChange', function (e) {
  if (mobileSwiper.activeIndex === 1) {
    mobileImages[0].src = './src/images/gray-line.svg';
    mobileImages[2].src = './src/images/gray-line.svg';
    mobileImages[3].src = './src/images/gray-line.svg';
    mobileImages[1].src = './src/images/orange-line.svg';
    removeColor(mobileTitles[0], mobileTitles[2], mobileTitles[3], mobileTexts[0], mobileTexts[2], mobileTexts[3]);
    addColor(mobileTitles[1], mobileTexts[1]);
  }
  if (mobileSwiper.activeIndex === 2) {
    mobileImages[0].src = './src/images/gray-line.svg';
    mobileImages[1].src = './src/images/gray-line.svg';
    mobileImages[3].src = './src/images/gray-line.svg';
    mobileImages[2].src = './src/images/orange-line.svg';
    removeColor(mobileTitles[0], mobileTitles[1], mobileTitles[3], mobileTexts[0], mobileTexts[1], mobileTexts[3]);
    addColor(mobileTitles[2], mobileTexts[2]);
  }
  if (mobileSwiper.activeIndex === 3) {
    mobileImages[0].src = './src/images/gray-line.svg';
    mobileImages[1].src = './src/images/gray-line.svg';
    mobileImages[2].src = './src/images/gray-line.svg';
    mobileImages[3].src = './src/images/orange-line.svg';
    removeColor(mobileTitles[2], mobileTitles[1], mobileTitles[0], mobileTexts[2], mobileTexts[1], mobileTexts[0]);
    addColor(mobileTitles[3], mobileTexts[3]);
  }
  if (mobileSwiper.activeIndex === 0) {
    mobileImages[1].src = './src/images/gray-line.svg';
    mobileImages[2].src = './src/images/gray-line.svg';
    mobileImages[3].src = './src/images/gray-line.svg';
    mobileImages[0].src = './src/images/orange-line.svg';
    addColor(mobileTitles[0], mobileTexts[0]);
    removeColor(mobileTitles[1], mobileTitles[2], mobileTitles[3], mobileTexts[1], mobileTexts[2], mobileTexts[3]);
  }
});



console.log(arrow1);

arrow1.addEventListener('click', function() {
  content1.style.display = 'block';
  solarImg.src = './src/images/on-grid-day-img.png';
  arrow1Img.src = './src/images/arrow_up.svg';
  solarSystemTitles[0].style.opacity = 1;
  onGridImgContainer.style.display = 'block';

});

arrow2.addEventListener('click', function() {
  content2.style.display = 'block';
  solarImg.src = './src/images/on-grid-night-img.png';
  arrow2Img.src = './src/images/arrow_up.svg';
  solarSystemTitles[1].style.opacity = 1;
  onGridNightImgContainer.style.display = 'block';
});

arrow3.addEventListener('click', function() {
  content3.style.display = 'block';
  solarImg.src = './src/images/off-grid-img.png';
  arrow3Img.src = './src/images/arrow_up.svg';
 solarSystemTitles[2].style.opacity = 1;
 offGridImgContainer.style.display = 'block';
});

content1.addEventListener('click', function() {
  content1.style.display = 'none';
  arrow1Img.src = './src/images/arrow_drop_down.svg';
  solarSystemTitles[0].style.opacity = 0.7;
  onGridImgContainer.style.display = 'none';

});

content2.addEventListener('click', function() {
  content2.style.display = 'none';
  arrow2Img.src = './src/images/arrow_drop_down.svg';
  solarSystemTitles[1].style.opacity = 0.7;
  onGridNightImgContainer.style.display = 'none';

});

content3.addEventListener('click', function() {
  content3.style.display = 'none';
  arrow3Img.src = './src/images/arrow_drop_down.svg';
 solarSystemTitles[2].style.opacity = 0.7;
  offGridImgContainer.style.display = 'none';

});