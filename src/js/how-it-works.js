const chooseLinks = document.querySelectorAll('.choose');
const plugInLinks = document.querySelectorAll(".plug-in");
const produceLinks = document.querySelectorAll(".produce")
const saveLinks = document.querySelectorAll(".save")
const chooseDiv = document.getElementById("choose")
const pluginDiv = document.getElementById("plug-in")
const produceDiv = document.getElementById("produce")
const saveDiv = document.getElementById("save")
const articles = document.querySelectorAll("article")
const links = document.querySelectorAll("article div ul li a");
const info = document.querySelector('.info')
const body = document.querySelector("body")

const arrow1 = document.querySelector('.arrow-1');
const arrow2 = document.querySelector('.arrow-2');
const arrow3 = document.querySelector('.arrow-3');
const arrow1Img = document.querySelector('.arrow-1-img');
const arrow2Img = document.querySelector('.arrow-2-img');
const arrow3Img = document.querySelector('.arrow-3-img');
let solarImg = document.querySelector('.solar-type-img');
const content1 = document.querySelector('.content-1');
const content2 = document.querySelector('.content-2');
const content3 = document.querySelector('.content-3');
const solarSystemTitles = document.querySelectorAll('.solar-system-title');
const onGridImgContainer = document.querySelector('.on-grid-img-container');
const onGridNightImgContainer = document.querySelector('.on-grid-night-img-container');
const offGridImgContainer = document.querySelector('.off-grid-img-container');

onGridImgContainer.style.display = 'none';
onGridNightImgContainer.style.display = 'none';
offGridImgContainer.style.display = 'none';

  if(window.innerWidth >= 900) {
    console.log(window.innerWidth)
    onGridImgContainer.style.display = 'none';
    onGridNightImgContainer.style.display = 'none';
    offGridImgContainer.style.display = 'none';
  }
arrow1.addEventListener('click', function() {
  content1.style.display = 'block';
  solarImg.src = './src/images/on-grid-day-img.png';
  arrow1Img.src = './src/images/arrow_up.svg';
  solarSystemTitles[0].style.opacity = 1;

  onGridImgContainer.style.display = 'block';

});

arrow2.addEventListener('click', function() {
  content2.style.display = 'block';
  solarImg.src = './src/images/on-grid-night-img.png';
  arrow2Img.src = './src/images/arrow_up.svg';
  solarSystemTitles[1].style.opacity = 1;
  onGridNightImgContainer.style.display = 'block';
});

arrow3.addEventListener('click', function() {
  content3.style.display = 'block';
  solarImg.src = './src/images/off-grid-img.png';
  arrow3Img.src = './src/images/arrow_up.svg';
 solarSystemTitles[2].style.opacity = 1;
 offGridImgContainer.style.display = 'block';
});

content1.addEventListener('click', function() {
  content1.style.display = 'none';
  arrow1Img.src = './src/images/arrow_drop_down.svg';
  solarSystemTitles[0].style.opacity = 0.7;
  onGridImgContainer.style.display = 'none';

});

content2.addEventListener('click', function() {
  content2.style.display = 'none';
  arrow2Img.src = './src/images/arrow_drop_down.svg';
  solarSystemTitles[1].style.opacity = 0.7;
  onGridNightImgContainer.style.display = 'none';

});

content3.addEventListener('click', function() {
  content3.style.display = 'none';
  arrow3Img.src = './src/images/arrow_drop_down.svg';
 solarSystemTitles[2].style.opacity = 0.7;
  offGridImgContainer.style.display = 'none';

});


  const swiper = new Swiper('.infoSwiper', {
      slidesPerView:1.2,
      navigation: {
        nextEl: ".swiper-button-next",
      },
      
    })
    const learnMoreSwiper = new Swiper('.learnMore', {});

  window.parent.addEventListener("scroll", () => {
     var current = "";
      const pageYOffset = window.parent.scrollY;
      articles.forEach((section) => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight / 2;
    if ( sectionTop <= pageYOffset) {
      current = section.getAttribute("id"); }
  });

  links.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
  })


   
  chooseLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault()
      chooseLinks.forEach(item => {
         item.classList.add("active")
         chooseDiv.scrollIntoView({ behavior: "smooth", block: "start" })
      });
        plugInLinks.forEach(item => {
         item.classList.remove("active")
      });
      
        produceLinks.forEach(item => {
         item.classList.remove("active")
      });
        saveLinks.forEach(item => {
         item.classList.remove("active")
      });

    })
  })

  plugInLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault()
      plugInLinks.forEach(item => {
         item.classList.add("active")
         pluginDiv.scrollIntoView({ behavior: "smooth", block: "start" })
      });
      chooseLinks.forEach(item => {
         item.classList.remove("active")
      });
      
        produceLinks.forEach(item => {
         item.classList.remove("active")
      });
        saveLinks.forEach(item => {
         item.classList.remove("active")
      });
    })
  })
  produceLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault()
      produceLinks.forEach(item => {
         item.classList.add("active")
         produceDiv.scrollIntoView({ behavior: "smooth", block: "start" })
      });

      plugInLinks.forEach(item => {
         item.classList.remove("active")
      });
      
        chooseLinks.forEach(item => {
         item.classList.remove("active")
      });
        saveLinks.forEach(item => {
         item.classList.remove("active")
      });
    })
  })
  saveLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault()
      saveLinks.forEach(item => {
         item.classList.add("active")
         saveDiv.scrollIntoView({ behavior: "smooth", block: "start" })
      });

       plugInLinks.forEach(item => {
         item.classList.remove("active")
      });
      
        produceLinks.forEach(item => {
         item.classList.remove("active")
      });
        chooseLinks.forEach(item => {
         item.classList.remove("active")
      });
    })
  }) 
