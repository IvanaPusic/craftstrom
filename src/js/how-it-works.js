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



  // window.addEventListener("load", function() {
  //   chooseLinks.forEach(link => {
  //     link.classList.add("active")
  //   })
  // });

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
