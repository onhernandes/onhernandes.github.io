var menu = document.getElementsByClassName('menu'),
	menu_height = menu[0].clientHeight,
	header = document.getElementsByClassName('header'),
	header_height = header[0].clientHeight;

menu[0].style.height = menu_height + 'px';

if (window_width > 960) {
	window.addEventListener('scroll', function() {
		menu_height = menu[0].clientHeight;
		console.log(menu_height);

		menu[0].style.height = (menu_height - (window.pageYOffset / 2)) + 'px';
	});
}