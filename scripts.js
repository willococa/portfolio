const hamburguer = document.querySelector('.breadcrumb');
const navMenu = document.querySelector('.desktop-nav');
const section = document.querySelector('.section');

hamburguer.addEventListener('click', () => {
		  hamburguer.classList.toggle('active');
		  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
		  hamburguer.classList.remove('active');
		  navMenu.classList.remove('active');
}));
function showPopUp(id) {
  const popup = document.querySelector(`.pop-${id}`);
		  	popup.classList.toggle('splash');
  section.classList.toggle('blur');
}
function validateForm(e) {
  			const mail = document.forms['contact-form'].email.value;
  const error = document.getElementById('mail-error');
  			if (mail.toLowerCase() != mail) {
  				error.hidden = false;
  				return false;
  			}
  			return true;
}