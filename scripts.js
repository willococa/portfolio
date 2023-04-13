const hamburguer = document.querySelector('.breadcrumb');
const navMenu = document.querySelector('.desktop-nav');
const main = document.querySelector('#works')
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
  main.classList.toggle('blurred');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active'); 
}));