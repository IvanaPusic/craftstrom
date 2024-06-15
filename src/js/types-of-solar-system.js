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
const titles = document.querySelectorAll('.title');

console.log(arrow1);

arrow1.addEventListener('click', function() {
  content1.style.display = 'block';
  solarImg.src = '../images/on-grid-day-img.png';
  arrow1Img.src = '../images/arrow_up.svg';
  titles[0].style.opacity = 1;
});

arrow2.addEventListener('click', function() {
  content2.style.display = 'block';
  solarImg.src = '../images/on-grid-night-img.png';
  arrow2Img.src = '../images/arrow_up.svg';
  titles[1].style.opacity = 1;
});

arrow3.addEventListener('click', function() {
  content3.style.display = 'block';
  solarImg.src = '../images/off-grid-img.png';
  arrow3Img.src = '../images/arrow_up.svg';
  titles[2].style.opacity = 1;
});

content1.addEventListener('click', function() {
  content1.style.display = 'none';
  arrow1Img.src = '../images/arrow_drop_down.svg';
  titles[0].style.opacity = 0.7;
});

content2.addEventListener('click', function() {
  content2.style.display = 'none';
  arrow2Img.src = '../images/arrow_drop_down.svg';
  titles[1].style.opacity = 0.7;
});

content3.addEventListener('click', function() {
  content3.style.display = 'none';
  arrow3Img.src = '../images/arrow_drop_down.svg';
  titles[2].style.opacity = 0.7;
});
