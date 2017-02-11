if (checkPage('home')) {
	var about__intro = document.getElementsByClassName('about__intro');

	if(window_width > 1024) {
		window.addEventListener('scroll', function() {
			var final_value = (250 - (window.pageYOffset / 2));

			if ((window.pageYOffset / 2) == 0 ) {
				final_value = 0;
			}

			about__intro[0].style.transform = 'translateY(-' + final_value + 'px)';
		});	
	}
}