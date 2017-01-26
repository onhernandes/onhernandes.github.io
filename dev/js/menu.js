var menu = document.getElementsByClassName('menu'),
	menu__icon = menu[0].childNodes[1],
	menu__search = menu[0].childNodes[3],
	menu__list = menu[0].childNodes[5],
	search = document.getElementsByClassName('search'),
	search_title = document.getElementsByClassName('search__form_title'),
	close_search = search_title[0].childNodes[1];

//menu__list.style.marginLeft = '-' + (menu__list.clientWidth + 10) + 'px';

if (window_width > 960) {
	menu__icon.addEventListener('click', function() {
		if (menu__list.className.indexOf('active') !== -1) {
			menu__list.className = 'menu__list';
		} else {
			menu__list.className += ' active';
		}
	});

	menu__search.addEventListener('click', function() {
		search[0].style.marginTop = 0;
	});

	close_search.addEventListener('click', function() {
		search[0].style.marginTop = '-100vh';
	});
}