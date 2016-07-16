$(document).ready(function() {
	$("#nav ul li a").click(function() {
		var tab = $(this).attr("data-tab");
		if (tab === "know-me") {
			$("#wrapper section").css("transform", "translateX(0%)");
		} else if (tab === "projects") {
			$("#wrapper section").css("transform", "translateX(-100%)");
		} else if (tab === "talk") {
			$("#wrapper section").css("transform", "translateX(-200%)");
		} else {
			$("#wrapper section").css("transform", "translateX(-300%)");
		}
	});
});