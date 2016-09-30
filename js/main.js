var icon = document.querySelector('#menu-icon'),
	first_icon = document.querySelector('.first-icon'),
	second_icon = document.querySelector('.second-icon'),
	third_icon = document.querySelector('.third-icon');

var nav = document.querySelector('.nav'),
    div = document.querySelector('.menu-new'),
    computedStyle = window.getComputedStyle(div),
    style = computedStyle.getPropertyValue('height');

nav.addEventListener('click', function() {
    event.preventDefault();

    computedStyle = window.getComputedStyle(div);
    style = computedStyle.getPropertyValue('height');
    
    if (style !== '0px') {
        div.style.height = '0px';
        nav.style.transform =  "translateY(0)";
    } else {
        div.style.height = '201px';
        nav.style.transform =  "translateY(208px)";
    }

    computedStyle = window.getComputedStyle(div);
    style = computedStyle.getPropertyValue('height');
});

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

icon.onclick = function () {
	if (this.classList.contains('active')) {
		this.style.transform = 'rotate(90deg)';

		setTimeout(function(){
			second_icon.classList.remove('a');
			first_icon.classList.remove('b');
			third_icon.classList.remove('b');
		}, 200);

		this.classList.remove('active');
	} else {
		this.style.transform = 'rotate(180deg)';

		setTimeout(function(){
			second_icon.classList.add('a');
			first_icon.classList.add('b');
			third_icon.classList.add('b');
		}, 100);
		

		this.classList.add('active');
	}
}

var content_header = document.querySelector('#content_header');


function parallax(){
	content_header.style.marginBottom = (window.pageYOffset * 3) + 'px';
}

window.addEventListener("scroll", parallax, false);