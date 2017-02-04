var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	body = document.getElementsByTagName('body'),
	projects_data = [
		{
			name: 'mustang.js',
			slug: 'mustang-js',
			desc: 'A simple jQuery slider',
			working: false,
			link: false,
			github: 'https://github.com/mhernandes/mustang-js'
		},
		{
			name: 'shield-scss',
			slug: 'shield-scss',
			desc: 'Simple SCSS files that I use on my work',
			working: true,
			link: false,
			github: 'https://github.com/mhernandes/shield-scss'
		},
		{
			name: 'keyguard',
			slug: 'keyguard',
			desc: 'Simple password manager, just for practice',
			working: false,
			link: false,
			github: 'https://github.com/mhernandes/keyguard'
		},
		{
			name: 'start-user',
			slug: 'start-user',
			desc: 'A cool form that create a new user(ie Admin) to a table just for test any thing',
			working: true,
			link: false,
			github: 'https://github.com/mhernandes/start-user'
		},
		{
			name: 'awesome-movies',
			slug: 'awesome-movies',
			desc: 'Awesome list with movies envolving tech',
			working: true,
			link: false,
			github: 'https://github.com/mhernandes/awesome-movies'
		},
		{
			name: 'awesome-series',
			slug: 'awesome-series',
			desc: 'Awesome list with series envolving tech',
			working: true,
			link: false,
			github: 'https://github.com/mhernandes/awesome-series'
		},
		{
			name: 'diametrum',
			slug: 'diametrum',
			desc: 'Diametrum is a cool and simple Jekyll theme, enjoy it!',
			working: false,
			link: false,
			github: 'https://github.com/mhernandes/diametrum'
		},
		{
			name: 'favorite-articles',
			slug: 'favorite-articles',
			desc: 'List with my favorite articles',
			working: true,
			link: false,
			github: 'https://github.com/mhernandes/favorite-articles'
		},
		{
			name: 'front-challenges',
			slug: 'front-challenges',
			desc: 'Cool list with some front end challenges',
			working: true,
			link: false,
			github: 'https://github.com/mhernandes/front-challenges'
		},
		{
			name: 'favorite-blogs',
			slug: 'favorite-blogs',
			desc: 'List with blogs that I follow',
			working: true,
			link: false,
			github: 'https://github.com/mhernandes/favorite-blogs'
		},
		{
			name: 'storage-calc',
			slug: 'storage-calc',
			desc: 'Calculate how many files fit on your storage',
			working: true,
			link: 'http://mhernandes.github.io/storage-calc',
			github: 'https://github.com/mhernandes/storage-calc'
		}
	];

function lockBody() {
	body[0].style.overflow = 'hidden';
	return true;
}

function unlockBody() {
	body[0].style.overflowY = 'scroll';
	return true;
}

function checkPage(page) {
	if (body[0].className.indexOf(page) !== -1) {
		return true;
	} else {
		return false;
	}
}