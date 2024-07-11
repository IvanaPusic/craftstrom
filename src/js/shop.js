const select = document.querySelector('select');
const kitsLink = document.querySelector('.kits-link');
const individualProductsLink = document.querySelector('.individual-products-link');
const kitsSection = document.querySelector('.kits');
const individualProductsSection = document.querySelector('.individual-products');
const selectSection = document.querySelector('.select-section');
const heroSection = document.querySelector('.hero');
const singleProductSection = document.querySelector('.single-product-section')
const buttons = document.querySelectorAll('.card-btn a');

const kitsSwiper = new Swiper('.kitsLinksSwiper',{
   slidesPerView: 1.7,
    navigation: {
      nextEl: ".swiper-button-next",
    },
});
const individualProductsSwiper = new Swiper('.individualProductsLinksSwiper',{
   slidesPerView: 1.2,
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

select.addEventListener("click", () => {
  if(select.value === 'kits') {
    kitsSection.style.display = "block";
    individualProductsSection.style.display = "none";
  }
  if(select.value === 'individual-products') {
    individualProductsSection.style.display = "block";
    kitsSection.style.display = "none";
  }
});

individualProductsSection.style.display= 'none';

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

// Function to toggle visibility of detail-info
function toggleDetailInfo(event) {
    const currentDetail = event.currentTarget.closest('.detail');
    const currentDetailInfos = currentDetail.querySelectorAll('.detail-info');
    const currentButtonImage = currentDetail.querySelector('.open-btn img');
    const isCurrentlyOpen = Array.from(currentDetailInfos).some(info => info.style.display === 'block');

    // Close all detail-info elements and reset button images
    document.querySelectorAll('.detail').forEach(detail => {
        const detailInfos = detail.querySelectorAll('.detail-info');
        const buttonImage = detail.querySelector('.open-btn img');
        detailInfos.forEach(info => {
            info.style.display = 'none';
        });
        buttonImage.src = './src/images/add.png';
    });

    // Open the clicked detail-info elements and change the button image
    if (!isCurrentlyOpen) {
        currentDetailInfos.forEach(info => {
            info.style.display = 'block';
        });
        currentButtonImage.src = './src/images/remove.png';
    }
}

// Attach event listeners to each open button
document.querySelectorAll('.title-button-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default action if any
        toggleDetailInfo(e);
    });
});

// List of link classes
const linkClasses = [
    'solar-kits-link',
    'battery-kits-link',
    'solar-battery-kits-link',
    'solar-panels-link',
    'battery-link',
    'power-meter-link',
    'safety-gate-adapter-link',
    'inverter-link',
    'smart-pv-plug-link',
    'cables-link'
];

// Add an event listener to the document for link clicks
document.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the clicked element has one of the link classes
    if (linkClasses.some(className => target.classList.contains(className))) {
        // Remove the "active" class from all links
        linkClasses.forEach(className => {
            document.querySelectorAll(`.${className}`).forEach(link => {
                link.classList.remove('active');
            });
        });

        // Add the "active" class to the clicked link
        target.classList.add('active');
    }
});
