const addColor = (titles, texts) => {
  titles.style.color = '#F9A41A';
  titles.style.opacity = 1;
  texts.style.color = '#fff';
  texts.style.opacity = 1;
};

const removeColor = (titles1, titles2, titles3, texts1, texts2, texts3) => {
  texts1.style.color = '#fff';
  titles1.style.color = '#fff';
  texts1.style.opacity = 0.7;
  titles1.style.opacity = 0.7;

  texts2.style.color = '#fff';
  titles2.style.color = '#fff';
  texts2.style.opacity = 0.7;
  titles2.style.opacity = 0.7;

  texts3.style.color = '#fff';
  titles3.style.color = '#fff';
  texts3.style.opacity = 0.7;
  titles3.style.opacity = 0.7;
};

const titles = document.querySelectorAll('.desktop-title');
const texts = document.querySelectorAll('.desktop-text');
const images = document.querySelectorAll('.line-image');

const mobileTitles = document.querySelectorAll('.mobile-title');
const mobileTexts = document.querySelectorAll('.mobile-text');
const mobileImages = document.querySelectorAll('.mobile-line-image');

const arrow1Img = document.querySelector('.arrow-1-img');
const arrow2Img = document.querySelector('.arrow-2-img');
const arrow3Img = document.querySelector('.arrow-3-img');

const solarImg = document.querySelector('.solar-type-img');
const solarSystemTitles = document.querySelectorAll('.solar-system-title');

const onGridImgContainer = document.querySelector('.on-grid-img-container');
const onGridNightImgContainer = document.querySelector('.on-grid-night-img-container');
const offGridImgContainer = document.querySelector('.off-grid-img-container');

const content1 = document.querySelector('.content-1');
const content2 = document.querySelector('.content-2');
const content3 = document.querySelector('.content-3');

const title1 = document.querySelector('.title-1');
const title2 = document.querySelector('.title-2');
const title3 = document.querySelector('.title-3');

onGridImgContainer.style.display = 'none';
onGridNightImgContainer.style.display = 'none';
offGridImgContainer.style.display = 'none';
content1.style.display = 'block';
title1.style.color = '#F9A41A';
arrow1Img.src = '/wp-content/themes/craftstrom/dist/images/arrow_up.svg';

const mainSwiper = new Swiper('.mainSwiper', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      console.log('Main Swiper active index:', this.activeIndex);
    }
  }
});

const firstSwiper = new Swiper(".inner-swiper", {
  observer: true,
  observeParents: true,
  spaceBetween: 20,
  nested: true,
  on: {
    slideChange: function () {
      console.log('First Swiper active index:', this.activeIndex);
      console.log('First Swiper element:', this.slides[this.activeIndex - 1]);
      const slide = this.slides[this.activeIndex - 1];
      const slideId = slide.dataset.slide;
      console.log('Slide id:', slideId);
      const allSlidesWithSlideIndex = document.querySelectorAll(`[data-slideIndex]`);
      console.log('All slides with slide index:', allSlidesWithSlideIndex);
      allSlidesWithSlideIndex.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('inactive');
      });

      const activeSlide = document.querySelector(`[data-slideIndex="${slideId}"]`);
      console.log('Active slide:', activeSlide);
      activeSlide.classList.remove('inactive');
      activeSlide.classList.add('active');
    }
  }
});

const mobileSwiper = new Swiper(".mobileSwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  observer: true,
  on: {
    slideChange: function () {
      console.log('Mobile Swiper active index:', this.activeIndex);
      updateActiveStateMobile(this.activeIndex);
    }
  }
});

const learnMoreSwiper = new Swiper('.learnMore', {
  slidesPerView:1,
  spaceBetween:0,
  breakpoints: {
    1024: {
      slidesPerView:3,
      spaceBetween:5,
    },
  },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  }
});

const popularKitsSwiper = new Swiper('.popularKitsSwiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  observer: true,
  observeParents: true,
});

const benefitsSwiper = new Swiper(".benefitsSwiper", {});

const blogSwiper = new Swiper('.blogSwiper', {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});

if (mobileSwiper.activeIndex === 0) {
  addColor(mobileTitles[0], mobileTexts[0]);
}


function updateActiveState(activeIndex, offset) {
  const activeImage = '/wp-content/themes/craftstrom/dist/images/orange-line.svg';
  const inactiveImage = '/wp-content/themes/craftstrom/dist/images/gray-line.svg';

  images.forEach((img, index) => {
    if (index >= offset && index < offset + 4) {
      img.src = (index - offset === activeIndex) ? activeImage : inactiveImage;
    }
  });

  const swiperTitles = Array.from(titles).slice(offset, offset + 4);
  const swiperTexts = Array.from(texts).slice(offset, offset + 4);

  removeColor(...swiperTitles, ...swiperTexts);
  addColor(swiperTitles[activeIndex], swiperTexts[activeIndex]);
}

function updateActiveStateMobile(activeIndex) {
  const activeImage = '/wp-content/themes/craftstrom/dist/images/orange-line.svg';
  const inactiveImage = '/wp-content/themes/craftstrom/dist/images/gray-line.svg';

  mobileImages.forEach((img, index) => {
    img.src = (index === activeIndex) ? activeImage : inactiveImage;
  });

  removeColor(...mobileTitles, ...mobileTexts);
  addColor(mobileTitles[activeIndex], mobileTexts[activeIndex]);
}

title1.addEventListener('click', function () {
  content1.style.display = 'block';
  solarImg.src = this.dataset.srcset ;
  arrow1Img.src = this.dataset.arrowimg;
  title1.style.color = "#F9A41A";
  onGridImgContainer.style.display = 'block';
  offGridImgContainer.style.display = 'none';
  onGridNightImgContainer.style.display = 'none';
  content2.style.display = 'none';
  content3.style.display = 'none';
});

title2.addEventListener('click', function () {
  content2.style.display = 'block';
  solarImg.src = this.dataset.srcset;
  arrow2Img.src = this.dataset.arrowimg;
  title2.style.color = "#F9A41A";
  onGridNightImgContainer.style.display = 'block';
  onGridImgContainer.style.display = 'none';
  offGridImgContainer.style.display = 'none';
  content1.style.display = 'none';
  content3.style.display = 'none';
});

title3.addEventListener('click', function () {
  console.log('this', this.dataset);
  content3.style.display = 'block';
  solarImg.src = this.dataset.srcset;
  arrow3Img.src = this.dataset.arrowimg ;
  title3.style.color = "#F9A41A";
  offGridImgContainer.style.display = 'block';
  onGridNightImgContainer.style.display = 'none';
  onGridImgContainer.style.display = 'none';
  content2.style.display = 'none';
  content1.style.display = 'none';
});

content1.addEventListener('click', function () {
  content1.style.display = 'none';
  arrow1Img.src = this.dataset.srcset;
  solarSystemTitles[0].style.opacity = 0.7;
  onGridImgContainer.style.display = 'none';
});

content2.addEventListener('click', function () {
  content2.style.display = 'none';
  arrow2Img.src = this.dataset.srcset;
  solarSystemTitles[1].style.opacity = 0.7;
  onGridNightImgContainer.style.display = 'none';
});

content3.addEventListener('click', function () {
  content3.style.display = 'none';
  arrow3Img.src = this.dataset.srcset;
  solarSystemTitles[2].style.opacity = 0.7;
  offGridImgContainer.style.display = 'none';
});
