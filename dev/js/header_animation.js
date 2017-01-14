var header = document.getElementsByClassName('header'),
	bgsize = 100;

if (header.length > 0 && window_width > 960) {
	window.addEventListener('scroll', function() {
		header[0].querySelector('.header__title').style.transform = 'translateY(' + (window.pageYOffset / 2) + 'px)';
		/*if (rand < 3) {
			header[0].querySelector('.header__title').style.transform = 'translateX(' + (window.pageYOffset / 5) + 'px)';
		} else if (rand < 6) {
			header[0].querySelector('.header__title').style.transform = 'translateY(' + (window.pageYOffset / 2) + 'px)';
		} else {
			header[0].querySelector('.header__title').style.transform = 'translateX(-' + (window.pageYOffset / 5) + 'px)';
		}*/

		//bgsize += (window.pageYOffset / 3000);

		header[0].querySelector('.header__background').style.transform = 'translateY(' + (window.pageYOffset / 12) + 'px)';
		//header[0].querySelector('.header__background').style.backgroundSize = bgsize + '%';
	});
}