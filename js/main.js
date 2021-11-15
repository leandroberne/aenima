const btnToggle = document.querySelector('#menu_burguer');
const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('header');
const btnClose = document.querySelector('.btnClose');
const banner = document.querySelector('.banner-image');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

btnToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  header.classList.toggle('inactive');
  banner.classList.toggle('inactive');
  main.classList.toggle('inactive');
  footer.classList.toggle('inactive');
});

btnClose.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  header.classList.toggle('inactive');
  banner.classList.toggle('inactive');
  main.classList.toggle('inactive');
  footer.classList.toggle('inactive');
});
