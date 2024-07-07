document.addEventListener('DOMContentLoaded', () => {
  const chooseLinks = document.querySelectorAll('.choose');
  const plugInLinks = document.querySelectorAll(".plug-in");
  const produceLinks = document.querySelectorAll(".produce");
  const saveLinks = document.querySelectorAll(".save");
  const chooseDiv = document.getElementById("choose");
  const pluginDiv = document.getElementById("plug-in");
  const produceDiv = document.getElementById("produce");
  const saveDiv = document.getElementById("save");
  const articles = document.querySelectorAll("article");
  const links = document.querySelectorAll(".info-links-wrapper .info-list a");

  const arrow1Img = document.querySelector('.arrow-1-img');
  const arrow2Img = document.querySelector('.arrow-2-img');
  const arrow3Img = document.querySelector('.arrow-3-img');

  let solarImg = document.querySelector('.solar-type-img');
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

  // Initialize titles and arrows
  onGridImgContainer.style.display = 'none';
  onGridNightImgContainer.style.display = 'none';
  offGridImgContainer.style.display = 'none';
  content1.style.display = 'block';
  title1.style.color = '#F9A41A';
  arrow1Img.src = './src/images/arrow_up.svg';

  title1.addEventListener('click', function () {
    content1.style.display = 'block';
    solarImg.src = './src/images/on-grid-day-img.png';
    arrow1Img.src = './src/images/arrow_up.svg';
    title1.style.color = "#F9A41A";
    onGridImgContainer.style.display = 'block';
    offGridImgContainer.style.display = 'none';
    onGridNightImgContainer.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
  });

  title2.addEventListener('click', function () {
    content2.style.display = 'block';
    solarImg.src = './src/images/on-grid-night-img.png';
    arrow2Img.src = './src/images/arrow_up.svg';
    title2.style.color = "#F9A41A";
    onGridNightImgContainer.style.display = 'block';
    onGridImgContainer.style.display = 'none';
    offGridImgContainer.style.display = 'none';
    content1.style.display = 'none';
    content3.style.display = 'none';
  });

  title3.addEventListener('click', function () {
    content3.style.display = 'block';
    solarImg.src = './src/images/off-grid-img.png';
    arrow3Img.src = './src/images/arrow_up.svg';
    title3.style.color = "#F9A41A";
    offGridImgContainer.style.display = 'block';
    onGridNightImgContainer.style.display = 'none';
    onGridImgContainer.style.display = 'none';
    content2.style.display = 'none';
    content1.style.display = 'none';
  });

  content1.addEventListener('click', function () {
    content1.style.display = 'none';
    arrow1Img.src = './src/images/arrow_drop_down.svg';
    solarSystemTitles[0].style.opacity = 0.7;
    onGridImgContainer.style.display = 'none';
  });

  content2.addEventListener('click', function () {
    content2.style.display = 'none';
    arrow2Img.src = './src/images/arrow_drop_down.svg';
    solarSystemTitles[1].style.opacity = 0.7;
    onGridNightImgContainer.style.display = 'none';
  });

  content3.addEventListener('click', function () {
    content3.style.display = 'none';
    arrow3Img.src = './src/images/arrow_drop_down.svg';
    solarSystemTitles[2].style.opacity = 0.7;
    offGridImgContainer.style.display = 'none';
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
    slidesPerView: 1.7,
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

  window.parent.addEventListener("scroll", () => {
    let current = "";
    const pageYOffset = window.parent.scrollY;

    // Determine which section is currently active
    articles.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight / 2;
      if (sectionTop <= pageYOffset) {
        current = section.getAttribute("id");
      }
    });

    // Update active class in links
    links.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });

    // Update swiper slide based on active section
    updateActiveSection(current);
  });

  // Function to update Swiper slide based on active section
  const updateActiveSection = (current) => {
    const sections = [
      { id: 'choose', links: chooseLinks },
      { id: 'plug-in', links: plugInLinks },
      { id: 'produce', links: produceLinks },
      { id: 'save', links: saveLinks },
    ];

    sections.forEach((section, index) => {
      if (section.id === current) {
        swiper.slideTo(index);
        section.links.forEach(link => {
          link.classList.add('active');
          document.getElementById(section.id).scrollIntoView({ behavior: "smooth", block: "start" });
        });
        sections.filter(sec => sec.id !== current).forEach(sec => {
          sec.links.forEach(link => link.classList.remove('active'));
        });
      }
    });
  };

  // Initial slide update based on URL hash
  swiper.slideTo(getInitialSlideIndex());

  const allLinks = [
    ...chooseLinks,
    ...plugInLinks,
    ...produceLinks,
    ...saveLinks,
  ];

  const allArticles = [
    chooseDiv,
    pluginDiv,
    produceDiv,
    saveDiv,
  ];

  allLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetArticle = document.getElementById(targetId);

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
  window.addEventListener('hashchange', () => {
    const index = getInitialSlideIndex();
    swiper.slideTo(index);
  });

  // Set initial slide for specific sections based on URL hash
  if (window.location.hash === '#choose') {
    swiper.slideTo(0);
  } else if (window.location.hash === '#plug-in') {
    swiper.slideTo(1);
  } else if (window.location.hash === '#produce') {
    swiper.slideTo(2);
  } else if (window.location.hash === '#save') {
    swiper.slideTo(3);
  }
});
