document.addEventListener('DOMContentLoaded', () => {
  const solarPanelsLinks = document.querySelectorAll('.solar-panels');
  const batteryLinks = document.querySelectorAll('.battery');
  const powerMeterLinks = document.querySelectorAll('.power-meter');
  const safetyGateLinks = document.querySelectorAll('.safety-gate-adapter');
  const inverterLinks = document.querySelectorAll('.inverter');
  const smartPvLinks = document.querySelectorAll('.smart-pv-plug');
  const ourAppLinks = document.querySelectorAll('.our-app');
  const articles = document.querySelectorAll('article');
  const links = document.querySelectorAll('.link');

  const solarPanelArticle = document.getElementById('solar-panels');
  const batteryArticle = document.getElementById('battery');
  const powerMeterArticle = document.getElementById('power-meter');
  const safetyGateArticle = document.getElementById('safety-gate-adapter');
  const inverterArticle = document.getElementById('inverter');
  const smartPvArticle = document.getElementById('smart-pv-plug');
  const ourAppArticle = document.getElementById('our-app');

  const showcaseSwiper = new Swiper('.showcase-swiper',{
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  const howItWorksSwiper = new Swiper('.how-it-works-swiper',{
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  const productLinksswiper = new Swiper('.productLinksSwiper', {
    slidesPerView: 1.7,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });
  const contentSwiper = new Swiper('.content-swiper', {
    slidesPerView: 1.2,
    // direction: 'horizontal',
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
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
      case '#our-app':
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
    productLinksswiper.slideTo(index);  // Update productLinksswiper as well
  });

  window.parent.addEventListener("scroll", () => {
    var current = "";
    const pageYOffset = window.parent.scrollY;
    articles.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight / 2;
      if (sectionTop <= pageYOffset) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });

    updateActiveSection(current);
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
 
        console.log(inverterLinks)
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

  const allLinks = [
    ...solarPanelsLinks,
    ...batteryLinks,
    ...powerMeterLinks,
    ...safetyGateLinks,
    ...inverterLinks,
    ...smartPvLinks,
    ...ourAppLinks
  ];

  const allArticles = [
    solarPanelArticle,
    batteryArticle,
    powerMeterArticle,
    safetyGateArticle,
    inverterArticle,
    smartPvArticle,
    ourAppArticle
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

  const mainContentDiv = document.querySelector(".main-content");
  const productLinks = document.querySelectorAll(".content-link");
  const wrapper = document.querySelector(".wrapper");

  mainContentDiv.style.display = "none";
  wrapper.style.display = "block";

  productLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      mainContentDiv.style.display = "block";
      wrapper.style.display = "none";

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Initial slide update based on URL hash
  productLinksswiper.slideTo(getInitialSlideIndex());

  // Set initial slide for specific sections based on URL hash
  if (window.location.hash === '#solar-panels') {
    productLinksswiper.slideTo(0);
  } else if (window.location.hash === '#battery') {
    productLinksswiper.slideTo(1);
  } else if (window.location.hash === '#power-meter') {
    productLinksswiper.slideTo(2);
  } else if (window.location.hash === '#safety-gate-adapter') {
    productLinksswiper.slideTo(3);
  } else if (window.location.hash === '#inverter') {
    productLinksswiper.slideTo(4);
  } else if (window.location.hash === '#smart-pv-plug') {
    productLinksswiper.slideTo(5);
  } else if (window.location.hash === '#our-app') {
    productLinksswiper.slideTo(6);
  }
});
