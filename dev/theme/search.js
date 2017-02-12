SimpleJekyllSearch({
	searchInput: document.getElementById('search_input'),
	resultsContainer: document.getElementById('search_results'),
	json: '/search.json',
	searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
	noResultsText: '<span>Ops! Anything was found, try again!</span>'
});