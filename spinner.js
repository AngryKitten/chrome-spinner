let elems = [...document.querySelectorAll('*:not(html):not(body)')];

const rand = (min, max, mod) => {
  return Math.floor(Math.random() * max + min) * mod;
};

const spin = (elem) => {
  elem.addEventListener('mouseover', () => {
    elem.style.color = 'firebrick';
    elem.style.transition = elem.style.transition || `all ${rand(5, 100, 1)}s ease-in-out`;
    elem.style.transform = elem.style.transform || `rotate(${rand(-5, 11, 360)}deg)`;
  });
};

elems.forEach(elem => spin(elem));
setInterval(() => {
  elems = [...document.querySelectorAll('*:not(html):not(body)')];
  elems.forEach(elem => spin(elem));
}, 10000);