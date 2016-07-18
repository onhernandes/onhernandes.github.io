$(document).ready(function() {
	$("#nav ul li a").click(function() {
		var tab = $(this).attr("data-tab");
		if (tab === "know-me") {
			$(".section").removeClass('projects').removeClass('blog').removeClass('talk').addClass('km');
			//$("#wrapper .section").css("height", "208vh");
		} else if (tab === "projects") {
			$(".section").removeClass('blog').removeClass('km').removeClass('talk').addClass('projects');
			//$("#wrapper .section").css("height", "100vh");
		} else if (tab === "blog") {
			$(".section").removeClass('projects').removeClass('km').removeClass('talk').addClass('blog');
			//$("#wrapper .section").css("height", "100vh");
		}
	});
});