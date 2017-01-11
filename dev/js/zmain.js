var launcher = document.querySelector('.flaticon-search'),
	searchSection = document.querySelector('.search'),
	inputSearch = document.querySelector('#search'),
	quitSearch = document.querySelector('#quit-search'),
	searchActive = false;

launcher.addEventListener('click', function() {
	searchSection.style.height = '100vh';
	searchActive = true;
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
});

quitSearch.addEventListener('click', function() {
	searchSection.style.height = '0';
	searchActive = false;
	document.getElementsByTagName('body')[0].style.overflow = 'scroll';
});

SimpleJekyllSearch({
	searchInput: document.getElementById('search'),
	resultsContainer: document.getElementById('results-container'),
	json: '/search.json',
	searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
	noResultsText: '<span>Ops! Anything was found, try again!'
});