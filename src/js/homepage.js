import { addColor, removeColor } from './features.js';

const titles = document.querySelectorAll('.desktop-title');
const texts = document.querySelectorAll('.desktop-text');
const images = document.querySelectorAll('.line-image');

const mobileTitles = document.querySelectorAll('.mobile-title');
const mobileTexts = document.querySelectorAll('.mobile-text');
const mobileImages = document.querySelectorAll('.mobile-line-image');
const slideTitles = document.querySelectorAll('.solar-system-title');


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

const firstSwiper = new Swiper(".first-swiper", {
  observer: true,
  observeParents: true,
  spaceBetween: 20,
  nested: true,
  on: {
    slideChange: function () {
      const swiperContainer = this.el.closest('.swiper');
      const dataIndex = Number(swiperContainer.dataset.index);
      console.log('First Swiper active index:', this.activeIndex);
      updateActiveState(this.activeIndex, dataIndex);
    }
  }
});

const secondSwiper = new Swiper(".second-swiper", {
  observer: true,
  observeParents: true,
  spaceBetween: 20,
  nested: true,
  on: {
    slideChange: function () {
      const swiperContainer = this.el.closest('.swiper');
      const dataIndex = Number(swiperContainer.dataset.index);
      console.log('Second Swiper active index:', this.activeIndex);
      updateActiveState(this.activeIndex, dataIndex);
    }
  }
});

const thirdSwiper = new Swiper(".third-swiper", {
  observer: true,
  observeParents: true,
  spaceBetween: 20,
  nested: true,
  on: {
    slideChange: function () {
      const swiperContainer = this.el.closest('.swiper');
      const dataIndex = Number(swiperContainer.dataset.index);
      console.log('Third Swiper active index:', this.activeIndex);
      updateActiveState(this.activeIndex, dataIndex);
    }
  }
});

const fourthSwiper = new Swiper(".fourth-swiper", {
  observer: true,
  observeParents: true,
  spaceBetween: 20,
  nested: true,
  on: {
    slideChange: function () {
      const swiperContainer = this.el.closest('.swiper');
      const dataIndex = Number(swiperContainer.dataset.index);
      console.log('Fourth Swiper active index:', this.activeIndex);
      updateActiveState(this.activeIndex,dataIndex);
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
  spaceBetween:20,
  breakpoints: {
    1024: {
      slidesPerView:2,
      spaceBetween:5,
    },
    1200: {
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
if (firstSwiper.activeIndex === 0) {
  addColor(titles[0], texts[0]);
}
if (secondSwiper.activeIndex === 1) {
  addColor(titles[4], texts[4]);
}
if (thirdSwiper.activeIndex === 2) {
  addColor(titles[8], texts[8]);
}
if (fourthSwiper.activeIndex === 3) {
  addColor(titles[12], texts[12]);
}

function updateActiveState(activeIndex, offset) {
  const activeImage = './src/images/orange-line.svg';
  const inactiveImage = './src/images/gray-line.svg';

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
  const activeImage = './src/images/orange-line.svg';
  const inactiveImage = './src/images/gray-line.svg';

  mobileImages.forEach((img, index) => {
    img.src = (index === activeIndex) ? activeImage : inactiveImage;
  });

  removeColor(...mobileTitles, ...mobileTexts);
  addColor(mobileTitles[activeIndex], mobileTexts[activeIndex]);
}

slideTitles.forEach((title, index) => {
    title.addEventListener('click', (event) => {
      console.log(event.currentTarget.classList);
            
      const currentHeader = event.currentTarget.querySelector('.arrow');
      console.log('current header', currentHeader)
      if (currentHeader.classList.contains('arrow-up')) {
        currentHeader.classList.remove('arrow-up');
        currentHeader.classList.add('arrow-down');
      } else {
        currentHeader.classList.remove('arrow-down');
        currentHeader.classList.add('arrow-up');
      }
     
      const headers = document.querySelectorAll('.solar-system-title .arrow');
      headers.forEach((header) => {
        if (header !== event.currentTarget) {
          header.classList.remove('arrow-up');
          header.classList.add('arrow-down');
        }
      });

      const content = document.querySelectorAll(`.types-of-solar-system .content`);
      content.forEach((item) => {
        item.classList.remove('show');
      });
      const slideContent = document.querySelector(`.types-of-solar-system .content-${index + 1}`);
      slideContent.classList.add('show');
      
      const image = document.querySelectorAll('.image-container .slide-img');
      console.log(image);
      image.forEach((item) => {
        item.classList.remove('show');
      });
      const slideImage = document.querySelector(`.image-container #system-img-${index}`);
      slideImage.classList.add('show');
    });
  });

// title1.addEventListener('click', function () {
//   content1.style.display = 'block';
//   solarImg.src = this.dataset.srcset ;
//   arrow1Img.src = this.dataset.srcset;
//   title1.style.color = "#F9A41A";
//   onGridImgContainer.style.display = 'block';
//   offGridImgContainer.style.display = 'none';
//   onGridNightImgContainer.style.display = 'none';
//   content2.style.display = 'none';
//   content3.style.display = 'none';
// });

// title2.addEventListener('click', function () {
//   content2.style.display = 'block';
//   solarImg.src = this.dataset.srcset;
//   arrow2Img.src = this.dataset.srcset;
//   title2.style.color = "#F9A41A";
//   onGridNightImgContainer.style.display = 'block';
//   onGridImgContainer.style.display = 'none';
//   offGridImgContainer.style.display = 'none';
//   content1.style.display = 'none';
//   content3.style.display = 'none';
// });

// title3.addEventListener('click', function () {
//   content3.style.display = 'block';
//   solarImg.src = this.dataset.srcset;
//   arrow3Img.src = this.dataset.srcset ;
//   title3.style.color = "#F9A41A";
//   offGridImgContainer.style.display = 'block';
//   onGridNightImgContainer.style.display = 'none';
//   onGridImgContainer.style.display = 'none';
//   content2.style.display = 'none';
//   content1.style.display = 'none';
// });

// content1.addEventListener('click', function () {
//   content1.style.display = 'none';
//   arrow1Img.src = this.dataset.srcset;
//   solarSystemTitles[0].style.opacity = 0.7;
//   onGridImgContainer.style.display = 'none';
// });

// content2.addEventListener('click', function () {
//   content2.style.display = 'none';
//   arrow2Img.src = this.dataset.srcset;
//   solarSystemTitles[1].style.opacity = 0.7;
//   onGridNightImgContainer.style.display = 'none';
// });

// content3.addEventListener('click', function () {
//   content3.style.display = 'none';
//   arrow3Img.src = this.dataset.srcset;
//   solarSystemTitles[2].style.opacity = 0.7;
//   offGridImgContainer.style.display = 'none';
// });
