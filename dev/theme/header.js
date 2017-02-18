var header = {
	header_tag: document.getElementsByClassName('header')[0],
	header_w: 0,
	header_h: 0,
	title: document.getElementsByClassName('header__wrapper_title')[0],
	bg: document.getElementsByClassName('background')[0],
	menu: document.getElementsByClassName('menu')[0],
	init: function() {
		this.setBgSize();
	},
	setBgSize: function() {
		this.header_w = this.header_tag.offsetWidth,
		this.header_h = this.header_tag.offsetHeight;
		this.menu.style.backgroundSize = this.header_w + 'px ' + this.header_h + 'px';
		this.bg.style.height = (this.header_h + 80) + 'px';
		return true;
	}
};

window.addEventListener('load', function() {
	header.init();
});