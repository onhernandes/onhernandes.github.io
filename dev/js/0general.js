var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	rand = 0;

function randomNum() {
	rand = Math.floor((Math.random() * 10) + 1);
	return this;
}

randomNum();