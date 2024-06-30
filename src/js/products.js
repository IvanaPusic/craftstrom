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

 const swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
   });
   const howItWorksswiper = new Swiper(".howItWorksSwiper", {
        spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
   });
window.addEventListener("DOMContentLoaded", function() {
    const mainContentDiv = document.querySelector(".main-content");
    const productLinks = document.querySelectorAll(".content-link");
    const wrapper = document.querySelector(".wrapper");

    console.log(mainContentDiv)

    // Initially hide the main content
    mainContentDiv.style.display = "none";
    wrapper.style.display = "block";

    productLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Show the main content
            mainContentDiv.style.display = "block";
            wrapper.style.display = "none";

            // Get the target section from the link's href attribute
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
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
});

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
    link.addEventListener("click", function(e) {
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
