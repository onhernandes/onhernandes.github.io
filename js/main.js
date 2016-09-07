var icon = document.querySelector('#menu-icon'),
	first_icon = document.querySelector('.first-icon'),
	second_icon = document.querySelector('.second-icon'),
	third_icon = document.querySelector('.third-icon');

var items = document.querySelector('.menu-items'),
	first_item = document.querySelector('.first-item'),
	second_item = document.querySelector('.second-item'),
	third_item = document.querySelector('.third-item');

var socials = document.querySelector('.menu-social'),
	first_social = document.querySelector('.first-social'),
	second_social = document.querySelector('.second-social'),
	third_social = document.querySelector('.third-social');

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function itemsDisplay() {		
	setTimeout(function(){
		items.style.display = 'block';
	}, 490);

	setTimeout(function(){
		//items.style.left = '20px';
		second_item.style.transform = 'translateX(0)';
		third_item.style.transform = 'translateX(0)';
	}, 500);
}

function socialDisplay() {		
	setTimeout(function(){
		socials.style.display = 'block';
	}, 490);

	setTimeout(function(){
		//socials.style.top = '50px';
		second_social.style.transform = 'translateY(0)';
		third_social.style.transform = 'translateY(0)';
	}, 500);
}

function undoItems() {
	setTimeout(function(){
		third_item.style.transform = 'translateX(-116px)';
		second_item.style.transform = 'translateX(-57px)';
	}, 200);
	
	setTimeout(function(){
		//items.style.left = '-20px';
		items.style.display = 'none';
	}, 400);
}

function undoSocial() {
	setTimeout(function(){
		second_social.style.transform = 'translateY(-24px)';
		third_social.style.transform = 'translateY(-50px)';
	}, 200);

	setTimeout(function(){
		//socials.style.top = '10px';
		socials.style.display = 'none';
	}, 400);
}

icon.onclick = function () {
	if (this.classList.contains('active')) {
		undoItems();
		undoSocial();
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

		itemsDisplay();
		socialDisplay();		

		this.classList.add('active');
	}

}