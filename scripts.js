
		const hamburguer = document.querySelector('.breadcrumb');
		const navMenu = document.querySelector('.desktop-nav');

		hamburguer.addEventListener('click', () => {
		  hamburguer.classList.toggle('active');
		  navMenu.classList.toggle('active');
		});

		document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
		  hamburguer.classList.remove('active');
		  navMenu.classList.remove('active');
		}));
		function showDropdown(id) {		  
			const drop = document.querySelector(".drop-"+id);
		  	drop.classList.toggle('splash');

		}