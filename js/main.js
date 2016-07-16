$(document).ready(function() {
	$("#nav ul li a").click(function() {
		var tab = $(this).attr("data-tab");
		if (tab === "know-me") {
			$(".section").css({
				"height": "200vh",
				"transform": "translateX(0%)"
			});
		} else if (tab === "projects") {
			$(".section").css({
				"height": "150vh",
				"transform": "translateX(-100%)"
			});
		} else if (tab === "talk") {
			$(".section").css({
				"height": "100vh",
				"transform": "translateX(-200%)"
			});
		} else {
			$(".section").css({
				"height": "100vh",
				"transform": "translateX(-300%)"
			});
		}
	});
});