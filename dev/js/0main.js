var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	body = document.getElementsByTagName('body'),
	projects_data = [
		{
			name: 'teste',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, natus!',
			github: 'https://github.com/mhernandes'
		}
	];

function lockBody() {
	body[0].style.overflow = 'hidden';
	return true;
}

function unlockBody() {
	body[0].style.overflowY = 'scroll';
	return true;
}

function checkPage(page) {
	if (body[0].className.indexOf(page) !== -1) {
		return true;
	} else {
		return false;
	}
}