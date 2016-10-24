var blog_posts = document.querySelector('.post'),
	filters    = document.querySelector('.filters__list_category');

function verifyFilter() {
	for (var i = 0; i < filters.length; i++) {
		for (var j = 0; j < blog_posts.length; j++) {
			var tags = blog_posts[j].querySelector('.post__content_tags');
			if (tags.indexOf(filters[i].getAttribute('filter')) == -1) {
				break_filters = true;
				break;
			}
		}

		if (break_filters) {
			break;
		}
	}
}