document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.link');
 
  const allArticles = [...links].map((link) => document.getElementById(link.getAttribute('href').substring(1)));
  console.log(allArticles)
  const slideTitles = document.querySelectorAll('.solar-system-title');

  slideTitles.forEach((title, index) => {
    title.addEventListener('click', (event) => {
      console.log(event.currentTarget.classList);
            
      const currentHeader = event.currentTarget.querySelector('.arrow');
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



  const getInitialSlideIndex = () => {
    const hash = window.location.hash;
    switch (hash) {
      case '#choose':
        return 0;
      case '#plug-in':
        return 1;
      case '#produce':
        return 2;
      case '#save':
        return 3;
      default:
        return 0;
    }
  };

  const swiper = new Swiper('.infoSwiper', {
    slidesPerView: 3.5,
    initialSlide: getInitialSlideIndex(),
    navigation: {
      nextEl: ".swiper-button-next",
    },

  });

  const productContentSwiper = new Swiper('.product-content-swiper', {});

  const learnMoreSwiper = new Swiper('.learnMore', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    }
  });


  // Initial slide update based on URL hash
  swiper.slideTo(getInitialSlideIndex());

  const allLinks = [
    ...links
  ];

  allLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetArticle = document.getElementById(targetId);
      console.log(targetArticle)
      allArticles.forEach(article => {
        article.classList.remove("active");
      });

      targetArticle.classList.add("active");
      targetArticle.scrollIntoView({ behavior: "smooth", block: "start" });

      allLinks.forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });


  // Update Swiper slide based on the URL hash on page load
  // window.addEventListener('hashchange', () => {
  //   const index = getInitialSlideIndex();
  //   swiper.slideTo(index);
  // });

  // Set initial slide for specific sections based on URL hash
  // if (window.location.hash === '#choose') {
  //   swiper.slideTo(0);
  // } else if (window.location.hash === '#plug-in') {
  //   swiper.slideTo(1);
  // } else if (window.location.hash === '#produce') {
  //   swiper.slideTo(2);
  // } else if (window.location.hash === '#save') {
  //   swiper.slideTo(3);
  // }
});
