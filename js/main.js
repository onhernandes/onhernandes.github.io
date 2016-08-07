$(document).ready(function() {
	var slide4 = function(wrapper, son) {
		var wrapper = $(wrapper),
			slide = $(son),
			total = slide.length,
			translate = 0,
			time = 2000,
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
});