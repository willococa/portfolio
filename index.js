const hamburguer = document.querySelector('.breadcrumb');
const menu = document.querySelector('.desktop-nav');
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle("inactive")
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
 
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');  
  document.body.classList.toggle("inactive")
}));