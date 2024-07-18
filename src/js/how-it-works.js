document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.link');
 
  const allArticles = [...links].map((link) => document.getElementById(link.getAttribute('href').substring(1)));
  const slideTitles = document.querySelectorAll('.solar-system-title');

  slideTitles.forEach((title, index) => {
    title.addEventListener('click', (event) => {
      const dataIndex = event.currentTarget.dataset.key;

      const inActiveTitles = document.querySelectorAll('.solar-system-title .title');
      inActiveTitles.forEach((title) => {
        title.classList.remove('active');
      });
      event.currentTarget.querySelector('.title').classList.add('active');

      const currentHeader = event.currentTarget.querySelector('#arrow-' + dataIndex);
      if (currentHeader.classList.contains('arrow-up')) {
          currentHeader.classList.remove('arrow-up');
          currentHeader.classList.add('arrow-down');
      } else {
          currentHeader.classList.remove('arrow-down');
          currentHeader.classList.add('arrow-up');
      }
     
      const headers = document.querySelectorAll('.solar-system-title .arrow');
      headers.forEach((header) => {
        const headerID = header.getAttribute('id');
        const id = 'arrow-' + dataIndex;
        if (headerID !== id) {
          header.classList.add('arrow-up');
          header.classList.remove('arrow-down');
        }
      });

      const slideContent = document.querySelector(`.types-of-solar-system .content-${dataIndex}-js`);
      const isOpenedContent = slideContent.classList.contains('show');
      const content = document.querySelectorAll(`.types-of-solar-system .content`);
      content.forEach((item) => {
        item.classList.remove('show');
      });
      if (!isOpenedContent) {
        slideContent.classList.add('show');
      }
      
      const mobileImage = document.querySelector(`.mobile-image-wrap-${dataIndex}-js`);
      const isOpened = mobileImage.classList.contains('show');
      const image = document.querySelectorAll(`.mobile-image-wrap`);
      image.forEach((item) => {
        item.classList.remove('show');
      });
      if(!isOpened) {
        mobileImage.classList.add('show');
      }

      const desktopImages = document.querySelectorAll(`.image-container .slide-img`);
      console.log(desktopImages);
      desktopImages.forEach((item) => {
        item.classList.remove('show');
      });

      const desktopImage = document.querySelector(`.image-container #system-img-${dataIndex}`);
      desktopImage.classList.add('show');

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
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetArticle = document.getElementById(targetId);

      allArticles.forEach((article) => {
        article.classList.remove('active');
      });
      targetArticle.classList.add('active');
      targetArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });

      allLinks.forEach((item) => {
        item.classList.remove('active');
      });

      link.classList.add('active');
    });
  });

  const sections = document.querySelectorAll('.section-js');
  const sidebarLinks = document.querySelectorAll('.info-links-wrapper .link');

  const offset = 360; // Adjust this value as needed to activate the link earlier

  const sectionPositions = Array.from(sections).map(section => {
      return {
          id: section.id,
          top: section.getBoundingClientRect().top + window.scrollY
      };
  });

  const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      sectionPositions.forEach((section, index) => {
          if (scrollPosition >= section.top && (index === sectionPositions.length - 1 || scrollPosition < sectionPositions[index + 1].top)) {
              sidebarLinks.forEach(link => link.classList.remove('active'));
              const activeLink = document.querySelector(`.info-links-wrapper .link[href="#${section.id.split('-')[0]}"]`);
              if (activeLink) {
                  activeLink.classList.add('active');
              }
          }
      });
  };

  window.addEventListener('scroll', handleScroll);

  // Call handleScroll initially to set the correct active link on page load
  handleScroll();
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
