import { addColor, removeColor } from './features.js';

let titles ;
let texts ;
let images;
let mobileTitles;
let mobileTexts;
let mobileImages;

async function loadTemplate(part, elementId) {
  try {
    const response = await fetch(`./src/template-parts/${part}.html`);
    const content = await response.text();
    console.log('test: ' , elementId)
    // console.log('res: ', content);
    //console.log( document.getElementsByClassName(elementId))
    document.getElementById(elementId).innerHTML = content;
  } catch (error) {
    console.error(`Error loading ${part}:`, error);
  }
}

window.addEventListener('load', async () => {
  // Load templates
  if(location.pathname =='/index.html') {
    await loadTemplate('hero', 'hero');
    await loadTemplate('video', 'video');
    await loadTemplate('products', 'products');
    await loadTemplate('features', 'features');
    await loadTemplate('types-of-solar-system', 'types-of-solar-system');
    await loadTemplate('popular-kits', 'popular-kits');
    await loadTemplate('benefits', 'benefits');
    await loadTemplate('configure-solar-and-battery', 'configure-solar-and-battery');
    await loadTemplate('learn-more', 'learn-more');
    await loadTemplate('blog', 'blog');
    titles = document.querySelectorAll('.title');
    texts = document.querySelectorAll('.text');
    images = document.querySelectorAll('.line-image');
    mobileTitles = document.querySelectorAll('.mobile-title');
    mobileTexts = document.querySelectorAll('.mobile-text');
    mobileImages = document.querySelectorAll('.mobile-line-image');

      // Initialize Swiper instances
    const swiper = new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      observer: true,
      observeParents: true,
      spaceBetween: 20,
    });

    const mobileSwiper = new Swiper('.mobileSwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      observer: true,
      observeParents: true,
      spaceBetween: 20,
    });

    console.log(swiper);

    if (swiper.activeIndex === 0 || mobileSwiper.activeIndex === 0) {
      addColor(titles[0], texts[0]);
      addColor(mobileTitles[0], mobileTexts[0]);
    }

    swiper.on('slideChange', function () {
      handleSlideChange(swiper, titles, texts, images);
    });

    mobileSwiper.on('slideChange', function () {
      handleSlideChange(mobileSwiper, mobileTitles, mobileTexts, mobileImages);
    });
  }
  console.log(location.pathname );
  if(location.href=='/how-it-works.html') {
    loadTemplate('how-it-works-hero', 'how-it-works-hero');
    loadTemplate('video', 'video');
    loadTemplate('info', 'info');
    loadTemplate('types-of-solar-system', 'types-of-solar-system');
    loadTemplate('how-to-videos', 'how-to-videos');
  }

  if(location.pathname == '/products.html') {
    loadTemplate('products-hero', 'products-hero');
    loadTemplate('products-content', 'products-content');
    loadTemplate('products-links', 'products-links');
  }
  
});

function handleSlideChange(swiperInstance, titlesArray, textsArray, imagesArray) {
  const activeIndex = swiperInstance.activeIndex;

  imagesArray.forEach((img, index) => {
    img.src = './src/images/gray-line.svg';
  });

  imagesArray[activeIndex].src = './src/images/orange-line.svg';

  removeColor(...titlesArray);
  removeColor(...textsArray);

  addColor(titlesArray[activeIndex], textsArray[activeIndex]);
}
