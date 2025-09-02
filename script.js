const burger = document.getElementById('burger');
const navElement = document.getElementById('nav');
const nav = navElement ? navElement.querySelector('ul') : null;

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  window.addEventListener('scroll', () => {
    nav.classList.remove('show');
  });
}
