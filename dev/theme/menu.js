// grab an element
var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	header = document.querySelector('.header'),
	header_position = header.offsetHeight,
	menu = document.querySelector(".menu"),
	headroom  = new Headroom(menu);
// initialise
headroom.init();

window.addEventListener('scroll', function() {
	if (window_width < 960) {
		menu = document.querySelector('.menu__links');
		headroom  = new Headroom(menu);
		headroom.init();

		if (window.pageYOffset > 66) {
			menu.style.position = 'fixed';
		} else {
			menu.style.position = 'static';
		}
	}

	if ((window.pageYOffset + 100) >= header_position) {
		menu.style.backgroundColor = '#333';
	} else {
		menu.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
	}
});