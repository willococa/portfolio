const hamburguer = document.querySelector('.breadcrumb');
const navMenu = document.querySelector('.desktop-nav');
const section = document.querySelector('.section');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textArea = document.getElementById('text-area');
const getInTouch = document.getElementById('getin');
const mail = document.forms['contact-form'].email.value;
const error = document.getElementById('mail-error');
let bool = true;

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
getInTouch.addEventListener('click', () => {

	if (mail.toLowerCase() != mail) {
		error.hidden = false;
		bool = false;
	}
	else {
		bool = true;
	}	
});

