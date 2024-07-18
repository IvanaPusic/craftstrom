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

  // Intersection Observer setup
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      const correspondingLink = document.querySelector(`.sidebar-link[href="#${sectionId}"]`);

      if (entry.isIntersecting) {
        correspondingLink.classList.add('active');
      } else {
        correspondingLink.classList.remove('active');
      }
    });
  }, observerOptions);

  allArticles.forEach(section => {
    observer.observe(section);
  });

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

  const kitsSwiper = new Swiper('.kitsLinksSwiper', {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

  const individualProductsSwiper = new Swiper('.individualProductsLinksSwiper', {
    slidesPerView: 3,
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
  const sidebarKitsLinks = document.querySelectorAll('.kits-links-wrapper .sidebar-link');
  const offset = 360; // Adjust this value as needed to activate the link earlier

  const sectionPositions = Array.from(sections).map(section => {
    return {
      id: section.id,
      top: section.getBoundingClientRect().top + window.scrollY
    };
  });

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY + offset;

  //   sectionPositions.forEach((section, index) => {
  //     if (scrollPosition >= section.top &&
  //       (index === sectionPositions.length - 1 || scrollPosition < sectionPositions[index + 1].top)) {

  //       sidebarLinks.forEach(link => link.classList.remove('active'));
  //       sidebarKitsLinks.forEach(link => link.classList.remove('active'));

  //       const activeLink = document.querySelector(`.individual-products-list .sidebar-link[href="#${section.id.split('-')[0]}"]`);
  //       const activeKitsLink = document.querySelector(`.kits-links-wrapper .sidebar-link[href="#${section.id.split('-')[0]}"]`);
        
  //       if (activeLink) {
  //         activeLink.classList.add('active');
  //       }
        
  //       if (activeKitsLink) {
  //         activeKitsLink.classList.add('active');
  //       }
  //     }
  //   });
  // };

  // window.addEventListener('scroll', handleScroll);
  // handleScroll();
});
