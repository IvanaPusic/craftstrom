document.addEventListener('DOMContentLoaded', () => {
  const chooseLinks = document.querySelectorAll('.swiper-slide .product-item');
  
  const mainContent = document.querySelector('.main-content');
  const allLinks = document.querySelectorAll('.product-item');
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

  const mainContentDiv = document.querySelector(".main-content");
  const productLinks = document.querySelectorAll(".content-link");
  const wrapper = document.querySelector(".wrapper");

  mainContentDiv.style.display = "none";
  wrapper.style.display = "block";

  productLinks.forEach(link => {
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
  const getInitialSlideIndex = () => {
    const hash = window.location.hash;
    switch (hash) {
      case '#bifacial-panel':
        return 0;
      case '#battery':
        return 1;
      case '#power-meter':
        return 2;
      case '#nec-smart-breaker':
        return 3;
      case '#inverter':
        return 4;
      case '#smart-pv-plug':
        return 5;
      case '#our-app':
        return 6;
      default:
        return 0;
    }
  };
  const productLinksswiper = new Swiper('.productLinksSwiper', {
    slidesPerView: 2.5,
    initialSlide: getInitialSlideIndex(),
    breakpoints: {
      600: {
        slidesPerView: 3,
      }
    },
    spaceBetween: 10,
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

  const swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  const sections = document.querySelectorAll('.section-article');
  const sidebarLinks = document.querySelectorAll('.products-list .products-list-item .product-item');
  const mobileLinks = document.querySelectorAll('.kitsLinksSwiper .swiper-wrapper .swiper-slide .product-item');
  console.log("sidebarLinks", sidebarLinks);
  console.log("sections", sections);

  let offset = 0; // Initial offset value

  const calculateOffset = () => {
    const headerHeight = document.querySelector('.productLinksSwiper')?.offsetHeight || 0;
    console.log("header height", headerHeight)
    const additionalOffset = 10; // Add any additional offset if needed
    offset = headerHeight + additionalOffset;
    console.log(offset)
  };

  calculateOffset(); // Calculate initial offset
  window.addEventListener('resize', calculateOffset); // Recalculate offset on resize

  const sectionPositions = Array.from(sections).map(section => {
    console.log("section position", section.getBoundingClientRect().top)
    return {
      id: section.id,
      top: section.getBoundingClientRect().top + window.scrollY
    };
  });

  console.log("section positions", sectionPositions)
  const handleScroll = () => {
    const scrollPosition = window.scrollY + offset;

    sectionPositions.forEach((section, index) => {
      // console.log(`${section.id} ${section.top}`)
      if (scrollPosition >= section.top && (index === sectionPositions.length - 1 || scrollPosition < sectionPositions[index + 1].top)) {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        mobileLinks.forEach(link => link.classList.remove('active'));

        const activeLink = document.querySelector(`.products-links-wrapper .product-item[href="#${section.id.split('-')[0]}"]`);
        const mobileActiveLink = document.querySelector(`.swiper-wrapper .swiper-slide .product-item[href="#${section.id.split('-')[0]}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
        if (mobileActiveLink) {
          console.log(index);
          swiper.slideTo(index);
          mobileActiveLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  // Call handleScroll initially to set the correct active link on page load
  handleScroll();
});
