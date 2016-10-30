var p_tag = document.getElementsByTagName('p'),
	lang  = document.getElementsByTagName('html').getAttribute('lang');

for (var i = 0; i < p_tag.length; i++) {
	p_tag[i].setAttribute('lang', lang);
}