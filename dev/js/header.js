if (!checkPage('article')) {
	var header = document.getElementsByClassName('header'),
		header__wrapper = header[0].querySelector('.header__wrapper');


	window.addEventListener('scroll', function() {
		header__wrapper.style.paddingTop = (window.pageYOffset / 2) + 'px';
	});
}