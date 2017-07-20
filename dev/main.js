var header = document.getElementById('header'),
	header__pos = header.getBoundingClientRect().top,
	header__init_pos = header.getBoundingClientRect().top,
	current_pos;

window.addEventListener('scroll', function(e) {
	current_pos = this.scrollY;
	header__pos = header.getBoundingClientRect().top;
	console.log('Current pos: ' + current_pos);
	console.log('header pos: ' + header__pos);
	if ((header__pos === 0 || header__pos < 0) && header.className.indexOf('active') == -1) {
		header.style.position = 'fixed';
		header.style.top = '0';
		header.className += ' active';
		console.log('Gotha');
	} 

	if(current_pos < header__init_pos && header.className.indexOf('active') != -1) {
		header.className = '';
		header.style.position = 'static';
		header.style.top = 'auto';
	}
});