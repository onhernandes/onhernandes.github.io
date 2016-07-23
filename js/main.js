$(document).ready(function() {
	$("#nav ul li a").click(function() {
		var tab = $(this).attr("data-tab");
		if (tab === "know-me") {
			$(".section").removeClass('pj').removeClass('sk').addClass('km');
		} else if (tab === "projects") {
			$(".section").removeClass('sk').removeClass('km').addClass('pj');
		} else if (tab === "skills") {
			$(".section").removeClass('pj').removeClass('km').addClass('sk');
		}
	});
});