const select = document.querySelector('select');
const kitsLink = document.querySelector('.kits-link');
const individualProductsLink = document.querySelector('.individual-products-link');
const kitsSection = document.querySelector('.kits');
const individualProductsSection = document.querySelector('.individual-products')
console.log('select',select);
console.log('kits',kitsLink);
console.log('individual products',individualProductsLink);

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

