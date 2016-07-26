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

	$(".flaticon-menu").click(function(){
		$("nav ul").animate({
			padding: "15px 0",
			height: "200px"
		}, 500);

		$("nav").animate({
			width: "100%"
		}, 500);
		
		$("nav ul").click(function(){
			$("nav ul").animate({
				padding: "0",
				height: "0px"
			}, 500);

			$("nav").animate({
				width: "100px"
			}, 500);
		});
	});
});