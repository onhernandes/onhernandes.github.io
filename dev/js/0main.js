var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	body = document.getElementsByTagName('body');

function lockBody() {
	body[0].style.overflow = 'hidden';
	return true;
}

function unlockBody() {
	body[0].style.overflowY = 'scroll';
	return true;
}