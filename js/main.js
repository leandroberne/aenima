const btnToggle = document.querySelector('#menu_burguer');
const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('header');
const btnClose = document.querySelector('.btnClose');
const banner = document.querySelector('.banner-image');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const homeNavb = document.querySelector('#home_navb');
const tendenciasNavb = document.querySelector('#tendencias_navb');
const blogNavb = document.querySelector('#blog_navb');
const homeSide = document.querySelector('#home_side');
const tendenciasSide = document.querySelector('#tendencias_side');
const blogSide = document.querySelector('#blog_side');

document.addEventListener('DOMContentLoaded', () => {
  homeNavb.style.color = '#2a3037';
  tendenciasNavb.style.color = '#cbd0d3';
  blogNavb.style.color = '#cbd0d3';
});

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

homeSide.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  header.classList.toggle('inactive');
  banner.classList.toggle('inactive');
  main.classList.toggle('inactive');
  footer.classList.toggle('inactive');
});

tendenciasSide.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  header.classList.toggle('inactive');
  banner.classList.toggle('inactive');
  main.classList.toggle('inactive');
  footer.classList.toggle('inactive');
});

blogSide.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  header.classList.toggle('inactive');
  banner.classList.toggle('inactive');
  main.classList.toggle('inactive');
  footer.classList.toggle('inactive');
});

homeNavb.addEventListener('click', () => {
  homeNavb.style.color = '#2a3037';
  tendenciasNavb.style.color = '#cbd0d3';
  blogNavb.style.color = '#cbd0d3';
});

tendenciasNavb.addEventListener('click', () => {
  homeNavb.style.color = '#cbd0d3';
  tendenciasNavb.style.color = '#2a3037';
  blogNavb.style.color = '#cbd0d3';
});

blogNavb.addEventListener('click', () => {
  homeNavb.style.color = '#cbd0d3';
  tendenciasNavb.style.color = '#cbd0d3';
  blogNavb.style.color = '#2a3037';
});
