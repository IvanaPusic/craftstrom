document.addEventListener('DOMContentLoaded', () => {
  const chooseLinks = document.querySelectorAll('.swiper-slide .product-item');
  const wrapper = document.querySelector('.wrapper');
  const contentLinks = document.querySelectorAll('.content-link')
  const mainContent = document.querySelector('.main-content');
  const allLinks = document.querySelectorAll(
    '.product-item'
  );

  const selectors = [...allLinks];

  const allArticles = [...allLinks].map((link) =>
    document.getElementById(link.getAttribute('href').substring(1))
  );
  
  const activateAndScroll = (targetId) => {
    const targetArticle = document.getElementById(targetId);
    
    // Scroll to the target article
    targetArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Remove active class from all product links
    allLinks.forEach((item) => {
      item.classList.remove('active');
    });

    // Add active class to all corresponding links
    const correspondingProductLinks = [...allLinks].filter(item => item.getAttribute('href').substring(1) === targetId);
    correspondingProductLinks.forEach(link => {
      link.classList.add('active');
    });
    
    // Update swiper position based on the first matching link
    if (correspondingProductLinks.length > 0) {
      const swiperIndex = selectors.indexOf(correspondingProductLinks[0]);
      if (swiperIndex !== -1) {
        productLinksswiper.slideTo(swiperIndex);
      }
    }
  };

  contentLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.style.display = 'block';
      wrapper.style.display = 'none';
      
      const targetId = link.getAttribute('href').substring(1);
      activateAndScroll(targetId);
    });
  });

  selectors.forEach((link) => {
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

  selectors.forEach((link) => {
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

  const showcaseSwiper = new Swiper('.showcase-swiper', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  const howItWorksSwiper = new Swiper('.how-it-works-swiper', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  const productLinksswiper = new Swiper('.productLinksSwiper', {
    slidesPerView: 2.5,
    breakpoints: {
      600: {
      slidesPerView: 3,

      }
    },
    spaceBetween:10,
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });
  const contentSwiper = new Swiper('.content-swiper', {
    slidesPerView: 1.2,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });

  const getInitialSlideIndex = () => {
    const hash = window.location.hash;
    switch (hash) {
      case '#solar-panels':
        return 0;
      case '#battery':
        return 1;
      case '#power-meter':
        return 2;
      case '#safety-gate-adapter':
        return 3;
      case '#inverter':
        return 4;
      case '#smart-pv-plug':
        return 5;
      case '#app':
        return 6;
      default:
        return 0;
    }
  };

  const swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    initialSlide: getInitialSlideIndex(),
  });

  window.addEventListener('hashchange', () => {
    const index = getInitialSlideIndex();
    // swiper.slideTo(index);
    productLinksswiper.slideTo(index); // Update productLinksswiper as well
  });

  const updateActiveSection = (current) => {
    const sections = [
      { id: 'solar-panels', links: solarPanelsLinks },
      { id: 'battery', links: batteryLinks },
      { id: 'power-meter', links: powerMeterLinks },
      { id: 'safety-gate-adapter', links: safetyGateLinks },
      { id: 'inverter', links: inverterLinks },
      { id: 'smart-pv-plug', links: smartPvLinks },
      { id: 'our-app', links: ourAppLinks },
    ];

    sections.forEach((section, index) => {
      if (section.id === current) {
        productLinksswiper.slideTo(index);

        console.log(inverterLinks);
        section.links.forEach((link) => {
          link.classList.add('active');
          document
            .getElementById(section.id)
            .scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        sections
          .filter((sec) => sec.id !== current)
          .forEach((sec) => {
            sec.links.forEach((link) => link.classList.remove('active'));
          });
      }
    });
  };
  // Set initial slide for specific sections based on URL hash
  // if (window.location.hash === '#solar-panels') {
  //   productLinksswiper.slideTo(0);
  // } else if (window.location.hash === '#battery') {
  //   productLinksswiper.slideTo(1);
  // } else if (window.location.hash === '#power-meter') {
  //   productLinksswiper.slideTo(2);
  // } else if (window.location.hash === '#safety-gate-adapter') {
  //   productLinksswiper.slideTo(3);
  // } else if (window.location.hash === '#inverter') {
  //   productLinksswiper.slideTo(4);
  // } else if (window.location.hash === '#smart-pv-plug') {
  //   productLinksswiper.slideTo(5);
  // } else if (window.location.hash === '#our-app') {
  //   productLinksswiper.slideTo(6);
  // }
});
