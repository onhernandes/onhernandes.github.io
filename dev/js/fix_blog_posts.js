var filters = document.querySelector('.filters__list_category');


function verifyFilter(value) {
	var blog_posts = document.getElementsByClassName('post');

	for (var i = 0; i < blog_posts.length; i++) {
		var tags = blog_posts[i].querySelector('.post__content_tags');
		console.log(tags);
		/*if (tags.getAttribute('tags').indexOf(value) == -1) {
			blog_posts[i].style.display = 'none';
		}*/
	}
}

if (filters) {
	filters.addEventListener('click', function() {
		var filter_value = filters.getAttribute('category');
		verifyFilter(filter_value);
	});
}

if (window_width < 680) {
	var post_wrapper = document.getElementsByClassName('post');
	
	if (post_wrapper.length > 0) {
		for (var i = 0; i < post_wrapper.length; i++) {
			var that = post_wrapper[i];
			that.removeChild(that.childNodes[3]);
		}
	}

	var posts_content = document.getElementsByClassName('post__content');
	
	if (posts_content.length > 0) {
		for (var k = 0; k < posts_content.length; k++) {
			var color = posts_content[k].getAttribute('color');
			posts_content[k].setAttribute('bg-color', color);
		}
	}
}