const btnToggle = document.querySelector('#menu_burguer');
const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('header');

btnToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  sidebar.style.setProperty('position', 'absolute');
  header.style.setProperty('position', 'static');
});
