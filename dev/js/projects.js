if (checkPage('home') || checkPage('about')) {
	var projects_section = document.getElementsByClassName('projects');
	
	/*if (checkPage('home')) {
		projects_data.forEach(function(obj, index) {
			var	article = document.createElement('article'),
				title = document.createElement('a'),
				title_h1 = document.createElement('h1'),
				intro = document.createElement('a'),
				list = document.createElement('ul'),
				list_li = (obj.link !== false ? new Array() : document.createElement('li')),
				list_li_a = document.createElement('a');

			title_h1.textContent = obj.name;
			title.appendChild(title_h1);
			title.setAttribute('href', obj.github);
			title.setAttribute('target', '_blank');
			title.className = 'projects__item_title';

			intro.textContent = obj.desc;
			intro.setAttribute('href', obj.github);
			intro.setAttribute('target', '_blank');
			intro.className = 'projects__item_intro';

			if (list_li.constructor === Array) {
				list_li[0] = document.createElement('li');
				list_li_a.setAttribute('href', obj.github);
				list_li_a.setAttribute('target', '_blank');
				list_li_a.setAttribute('icon', 'github');
				list_li[0].appendChild(list_li_a);

				list_li[1] = document.createElement('li');
				list_li_a = document.createElement('a');
				list_li_a.setAttribute('href', obj.link);
				list_li_a.setAttribute('target', '_blank');
				list_li_a.setAttribute('icon', 'link');
				list_li[1].appendChild(list_li_a);

				list.appendChild(list_li[0]);
				list.appendChild(list_li[1]);
			} else {
				list_li = document.createElement('li');
				list_li_a.setAttribute('href', obj.github);
				list_li_a.setAttribute('target', '_blank');
				list_li_a.setAttribute('icon', 'github');
				list_li.appendChild(list_li_a);
				list.appendChild(list_li);
			}

			list.className = 'projects__item_list';

			article.appendChild(title);
			article.appendChild(intro);
			article.appendChild(list);
			article.setAttribute('project', obj.slug);
			article.setAttribute('title', obj.name);
			article.className = 'projects__item';

			projects_section[0].appendChild(article);
		});
	} else {
		projects_data.forEach(function(obj, index) {
			var	li = document.createElement('li'),
				a = document.createElement('a'),
				h3 = document.createElement('h3'),
				list = projects[0].querySelector('.about__projects_list');

			li.className = 'about__projects_list-item';
			a.setAttribute('href', obj.github);
			a.setAttribute('target', '_blank');
			a.setAttribute('title', obj.name);
			h3.textContent = obj.name;

			a.appendChild(h3);
			li.appendChild(a);

			list.appendChild(li);
		});
	}*/


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
	}
}