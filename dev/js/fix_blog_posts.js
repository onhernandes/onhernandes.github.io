var filters = document.querySelector('.filters__list_category');

function verifyFilter(value) {
	var blog_posts = document.getElementsByClassName('post');

	for (var i = 0; i < blog_posts.length; i++) {
		var tags = blog_posts[i].querySelector('.post__content_tags');
		if (tags.getAttribute('tags').indexOf(value) == -1) {
			blog_posts[i].style.display = 'none';
		}
	}
}

if (filters) {
	filters.addEventListener('click', function() {
		var filter_value = this.getAttribute('filter');
		verifyFilter(filter_value);
	});
}

if (window_width < 680) {
	var posts_background = document.getElementsByClassName('post__background');
	
	for (var i = 0; i < posts_background.length; i++) {
	//	posts_background[i].parentNode.removeChild(posts_background[i]);
	}

	var posts_content = document.getElementsByClassName('post__content');

	for (var k = 0; k < posts_content.length; k++) {

		var color = posts_content[k].getAttribute('bg-color');
		console.log(color);

		if (!color) {
			post__content[k].className = 'bg-color';
		}
	}
	console.log('color');
}