// grab an element
var menu = document.querySelector(".menu");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(menu);
// initialise
headroom.init();

if (menu.scrollTop) {}