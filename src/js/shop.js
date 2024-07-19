document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select');
  const kitsLink = document.querySelector('.kits-link');
  const individualProductsLink = document.querySelector('.individual-products-link');
  const kitsSection = document.querySelector('.kits');
  const individualProductsSection = document.querySelector('.individual-products');
  const selectSection = document.querySelector('.select-section');
  const heroSection = document.querySelector('.hero');
  const singleProductSection = document.querySelector('.single-product-section');
  const buttons = document.querySelectorAll('.card-btn a');
  const links = document.querySelectorAll('.sidebar-link');

  const allArticles = [...links].map(link => document.getElementById(link.getAttribute('href').substring(1)));


  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetArticle = document.getElementById(targetId);

      allArticles.forEach((article) => {
        article.classList.remove('active');
      });
      targetArticle.classList.add('active');
      targetArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });

      links.forEach((item) => {
        item.classList.remove('active');
      });

      link.classList.add('active');
    });
  });

    const getInitialSlideIndexKits = () => {
    const hash = window.location.hash;
    switch (hash) {
      case '#plugplay-solar-kits':
        return 0;
      case '#solar-battery-kits':
        return 1;
      case '#battery-kits':
        return 2;
      case '#solar-offgrid-kits':
        return 3;
      default:
        return 0;
    }
  };
    const getInitialSlideIndexProducts = () => {
    const hash = window.location.hash;
    switch (hash) {
      case '#diy-solar-batteries':
        return 0;
      case '#bifacial-solar-panels':
        return 1;
      case '#smart-solar-micro-inverter':
        return 2;
      case '#smart-powermeters':
        return 3;
      case '#nec-smart-breakers':
        return 3;
      case '#cables':
        return 3;
      default:
        return 0;
    }
  };
  const kitsSwiper = new Swiper('.kitsLinksSwiper', {
    slidesPerView: 2.5,
    initialSlide: getInitialSlideIndexKits(),
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

  const individualProductsSwiper = new Swiper('.individualProductsLinksSwiper', {
    slidesPerView: 2.5,
    initialSlide: getInitialSlideIndexProducts(),
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

  const recommendedSwiper = new Swiper('.recommended-products-swiper', {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  select.addEventListener("change", () => {
    if (select.value === 'kits') {
      kitsSection.style.display = "block";
      individualProductsSection.style.display = "none";
    } else if (select.value === 'individual-products') {
      individualProductsSection.style.display = "block";
      kitsSection.style.display = "none";
    }
  });

  kitsLink.addEventListener("click", () => {
    kitsSection.style.display = "block";
    individualProductsSection.style.display = "none";
    kitsLink.classList.add("active");
    individualProductsLink.classList.remove("active");
  });

  individualProductsLink.addEventListener("click", () => {
    individualProductsSection.style.display = "block";
    kitsSection.style.display = "none";
    individualProductsLink.classList.add("active");
    kitsLink.classList.remove("active");
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      singleProductSection.style.display = 'block';
      kitsSection.style.display = 'none';
      individualProductsSection.style.display = 'none';
      selectSection.style.display = 'none';
      heroSection.style.display = 'none';
    });
  });

  function toggleDetailInfo(event) {
    const currentDetail = event.currentTarget.closest('.detail');
    const currentDetailInfos = currentDetail.querySelectorAll('.detail-info');
    const currentButtonImage = currentDetail.querySelector('.open-btn img');
    const isCurrentlyOpen = Array.from(currentDetailInfos).some(info => info.style.display === 'block');

    document.querySelectorAll('.detail').forEach(detail => {
      const detailInfos = detail.querySelectorAll('.detail-info');
      const buttonImage = detail.querySelector('.open-btn img');
      detailInfos.forEach(info => {
        info.style.display = 'none';
      });
      buttonImage.src = './src/images/add.png';
    });

    if (!isCurrentlyOpen) {
      currentDetailInfos.forEach(info => {
        info.style.display = 'block';
      });
      currentButtonImage.src = './src/images/remove.png';
    }
  }

  document.querySelectorAll('.title-button-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDetailInfo(e);
    });
  });

  const sections = document.querySelectorAll('.category-section');
  const sidebarLinks = document.querySelectorAll('.individual-products-list .sidebar-link');
  const mobileLinks = document.querySelectorAll('.swiper-wrapper .swiper-slide .sidebar-link');

   let offset = 0; // Initial offset value

  const calculateOffset = () => {
    const headerHeight = document.querySelector('.kitsLinksSwiper')?.offsetHeight || 0;
    console.log("header height", headerHeight)
    const additionalOffset = 10; // Add any additional offset if needed
    offset = headerHeight + additionalOffset;
  };

  calculateOffset(); // Calculate initial offset
  window.addEventListener('resize', calculateOffset); // Recalculate offset on resize

  const sectionPositions = Array.from(sections).map(section => {
    return {
      id: section.id,
      top: section.getBoundingClientRect().top + window.scrollY
    };
  });

  console.log("sectionPositions", sectionPositions)
  const handleScroll = () => {
    const scrollPosition = window.scrollY + offset;

    sectionPositions.forEach((section, index) => {
      if (scrollPosition >= section.top && (index === sectionPositions.length - 1 || scrollPosition < sectionPositions[index + 1].top)) {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        mobileLinks.forEach(link => link.classList.remove('active'));

        const activeLink = document.querySelector(`.individual-products-list .sidebar-link[href="#${section.id.split('-')[0]}"]`);
        const activeKitsLink = document.querySelector(`.kits-links-wrapper .sidebar-link[href="#${section.id.split('-')[0]}"]`);
        const mobileActiveLink = document.querySelector(`.swiper-wrapper .swiper-slide sidebar-link[href="#${section.id.split('-')[0]}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
        if (activeKitsLink) {
          activeKitsLink.classList.add('active');
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
