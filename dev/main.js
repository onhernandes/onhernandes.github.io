// var header = document.getElementById('header'),
// 	header__pos = header.getBoundingClientRect().top,
// 	header__init_pos = header.getBoundingClientRect().top,
// 	window_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
// 	current_pos;

// if (window_width > 960) {
// 	window.addEventListener('scroll', function(e) {
// 		current_pos = this.scrollY;
// 		header__pos = header.getBoundingClientRect().top;
// 		if ((header__pos === 0 || header__pos < 0) && header.className.indexOf('active') == -1) {
// 			header.style.position = 'fixed';
// 			header.style.top = '0';
// 			header.className += ' active';
// 		} 

// 		if(current_pos < header__init_pos && header.className.indexOf('active') != -1) {
// 			header.className = '';
// 			header.style.position = 'static';
// 			header.style.top = 'auto';
// 		}
// 	});
// }
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(['assets/profile.jpg', 'assets/bg.jpg']);