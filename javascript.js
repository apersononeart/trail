const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}


$(document).ready(function () {
	$(".menu-toggle").click(function () {
		$('navbar-heading').toggleClass('active');
	})
})