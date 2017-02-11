if (checkPage('home') || checkPage('about')) {
	var projects_section = document.getElementsByClassName('projects');

	if (checkPage('home')) {
		var	projects__item = projects_section[0].getElementsByClassName('projects__item'),
			item_width = projects__item[0].clientWidth,
			new_width = total_width = item_counter = displayed = 0,
			total_items = projects__item.length;

		// Get the width from all of the items
		for (var i = 0; i < projects__item.length; i++) {
			total_width += projects__item[i].clientWidth;
		}

		// Set how many items are being displayed
		if (window_width > 1280) {
			displayed = 4;
		} else if (window_width > 760) {
			displayed = 3;
		} else {
			displayed = 0;
		}

		if (total_width >= window_width) {
			setInterval(function() {
				new_width += item_width;
				item_counter++;

				if (item_counter < (total_items - displayed)) {
					for (var i = 0; i < projects__item.length; i++) {
						projects__item[i].style.transform = 'translateX(-' + new_width + 'px)';
					}
				} else {
					for (var i = 0; i < projects__item.length; i++) {
						projects__item[i].style.transform = 'translateX(0)';
						new_width = item_counter = 0;
					}
				}
			}, 3000);	
		}
	} else {
		var	games_section = document.getElementsByClassName('about__games_list'),
			games__item = games_section[0].getElementsByClassName('about__games_list-item'),
			item_width = games__item[0].clientWidth,
			new_width = total_width = item_counter = displayed = 0,
			total_items = games__item.length;

		// Get the width from all of the items
		for (var i = 0; i < games__item.length; i++) {
			total_width += games__item[i].clientWidth;
		}

		// Set how many items are being displayed
		if (window_width > 1280) {
			displayed = 4;
		} else if (window_width > 760) {
			displayed = 3;
		} else {
			displayed = 0;
		}

		if (total_width >= window_width) {
			setInterval(function() {
				new_width += item_width;
				item_counter++;

				if (item_counter < (total_items - displayed)) {
					for (var i = 0; i < games__item.length; i++) {
						games__item[i].style.transform = 'translateX(-' + new_width + 'px)';
					}
				} else {
					for (var i = 0; i < games__item.length; i++) {
						games__item[i].style.transform = 'translateX(0)';
						new_width = item_counter = 0;
					}
				}

				console.log('yeah');
			}, 3000);	
		}
	}
}