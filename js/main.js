$(document).ready(function() {
	var mustang = function(son) {
		var slide = $(son),
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

	mustang(".banner");

	$(".icon-menu").click(function() {
		$(".nav ul").toggle('fast');
		$(".nav span").toggle('fast');
	});
});