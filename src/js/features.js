const addColor = (titles, texts) => {
  titles.style.color = '#F9A41A';
  titles.style.opacity = 1;
  texts.style.color = '#fff';
  texts.style.opacity = 1;
};

const removeColor = (titles1, titles2, titles3, texts1, texts2, texts3) => {
  texts1.style.color = '#fff';
  titles1.style.color = '#fff';
  texts1.style.opacity = 0.7;
  titles1.style.opacity = 0.7;

  texts2.style.color = '#fff';
  titles2.style.color = '#fff';
  texts2.style.opacity = 0.7;
  titles2.style.opacity = 0.7;

  texts3.style.color = '#fff';
  titles3.style.color = '#fff';
  texts3.style.opacity = 0.7;
  titles3.style.opacity = 0.7;
};

export { addColor, removeColor };

