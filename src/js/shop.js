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
   slidesPerView: 1.7,
    navigation: {
      nextEl: ".swiper-button-next",
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
})

// kitsLink.classList.add("active");
individualProductsSection.style.display= 'none';

kitsLink.addEventListener("click", () => {
  kitsSection.style.display = "block";
  individualProductsSection.style.display = "none";
  kitsLink.classList.add("active");
  individualProductsLink.classList.remove("active");
})
individualProductsLink.addEventListener("click", () => {
  individualProductsSection.style.display = "block";
  kitsSection.style.display = "none";
  individualProductsLink.classList.add("active");
  kitsLink.classList.remove("active");
})

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    // e.preventDefault();
    singleProductSection.style.display = 'block';
    kitsSection.style.display = 'none';
    individualProductsSection.style.display = 'none';
    selectSection.style.display = 'none';
    heroSection.style.display = 'none';
  })
})