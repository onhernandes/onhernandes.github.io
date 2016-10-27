var header = document.getElementsByClassName('header'),
	header_style = window.getComputedStyle(header[0]),
	header_height = header_style.getPropertyValue('height');

window.addEventListener('scroll', function() {
	header_height = header_style.getPropertyValue('height');

	header[0].querySelector('.header__title').style.marginLeft = (window.pageYOffset / 5) + 'px';
});