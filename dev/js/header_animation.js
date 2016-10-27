var header = document.getElementsByClassName('header'),
	header_style = window.getComputedStyle(header[0]),
	header_height = header_style.getPropertyValue('height'),
	rand = 0;

function randomNum() {
	rand = Math.floor((Math.random() * 10) + 1);
	return this;
}

randomNum();

window.addEventListener('scroll', function() {
	if (rand > 1) {
		header[0].querySelector('.header__title').style.marginLeft = (window.pageYOffset / 5) + 'px';
	} else {
		header[0].querySelector('.header__title').style.marginRight = (window.pageYOffset / 5) + 'px';
	}
});