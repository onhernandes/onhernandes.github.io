$(document).ready(function() {
	var slide4 = function(wrapper, son) {
		var wrapper = $(wrapper),
			slide = $(son),
			total = slide.length,
			translate = 0,
			time = 3000,
			counter = 0;

		function move() {
			translate += 100;
			counter++;

			if (counter < total) {
				var final = "translateX(-" + translate + "%)";
			} else {
				var final = "translateX(0%)";
				counter = 0;
				translate = 0;
			}

			slide.css("transform", final);
		}
		
		var interval = setInterval(move, time);
	}

	slide4(".slide", ".banner");

	$(".icon-menu").click(function() {
		$(".nav ul").toggle('fast');
		$(".nav span").toggle('fast');
	});

	$("section").click(function() {
		$(".nav ul").hide('fast');
		$(".nav span").hide('fast');
	});

	$("main").click(function() {
		$(".nav ul").hide('fast');
		$(".nav span").hide('fast');
	});

	$("header").click(function() {
		$(".nav ul").hide('fast');
		$(".nav span").hide('fast');
	});
});