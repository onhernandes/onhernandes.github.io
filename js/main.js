$(document).ready(function() {
	$("#nav ul li a").click(function() {
		var tab = $(this).attr("data-tab");
		if (tab === "know-me") {
			$("#wrapper .section").css("height", "200vh");
			$(".section").removeClass('projects').removeClass('blog').removeClass('talk').addClass('km');
		} else if (tab === "projects") {
			$("#wrapper .section").css("height", "100vh");
			$(".section").removeClass('blog').removeClass('km').removeClass('talk').addClass('projects');
		} else if (tab === "talk") {
			$("#wrapper .section").css("height", "100vh");
			$(".section").removeClass('projects').removeClass('blog').removeClass('km').addClass('talk');
		} else {
			$("#wrapper .section").css("height", "100vh");
			$(".section").removeClass('projects').removeClass('km').removeClass('talk').addClass('blog');
		}
	});
});