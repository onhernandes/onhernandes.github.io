var menu = document.getElementsByClassName('menu'),
	menu__icon = menu[0].childNodes[1],
	menu__search = menu[0].childNodes[3],
	menu__wrapper = document.getElementsByClassName('menu__wrapper'),
	menu__close = document.getElementsByClassName('menu__wrapper_close'),
	search = document.getElementsByClassName('search'),
	search_title = document.getElementsByClassName('search__form_title'),
	close_search = search_title[0].childNodes[1];


menu__icon.addEventListener('click', function() {
	/*if (menu__wrapper.className.indexOf('active') !== -1) {
		menu__wrapper.className = 'menu__wrapper';
	} else {
		menu__wrapper.className += ' active';
	}*/

	if (menu__wrapper[0].className.indexOf('active') == -1) {
		menu__wrapper[0].className += ' active';
	}
});

if (window_width < 760) {
	menu__close[0] = menu__wrapper[0].childNodes[1].childNodes[1];
}

menu__close[0].addEventListener('click', function() {
	menu__wrapper[0].className = 'menu__wrapper';	
});

if (window_width < 760) {
	document.getElementsByClassName('menu__wrapper_close-mobile')[0].addEventListener('click', function() {
		menu__wrapper[0].className = 'menu__wrapper';	
	});
}

menu__search.addEventListener('click', function() {
	search[0].style.marginTop = 0;
	lockBody();
});

close_search.addEventListener('click', function() {
	search[0].style.marginTop = '-100vh';
	unlockBody();
});