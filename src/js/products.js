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



  const swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


  const sections = document.querySelectorAll('.section-article');
  const sidebarLinks = document.querySelectorAll('.products-links-wrapper .product-item');
  const offset = 360; // Adjust this value as needed to activate the link earlier

  const sectionPositions = Array.from(sections).map(section => {
      return {
          id: section.id,
          top: section.getBoundingClientRect().top + window.scrollY
      };
  });
 
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + offset;
  //     console.log(scrollPosition)
  //     sectionPositions.forEach((section, index) => {
  //         if (scrollPosition >= section.top && (index === sectionPositions.length - 1 || scrollPosition < sectionPositions[index + 1].top)) {
  //             sidebarLinks.forEach(link => link.classList.remove('active'));
  //             const activeLink = document.querySelector(`.product-item[href="#${section.id.split('-')[0]}"]`);
  //             if (activeLink) {
  //                 activeLink.classList.add('active');
  //             }
  //         }
  //     });
  //   };
  // window.addEventListener('scroll', handleScroll);
  // handleScroll();
   
});
