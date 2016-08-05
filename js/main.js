$(document).ready(function() {
	var project = $(".projects article");
	var translate = project.css("translateX");
	setTimeout(function() {
		translate += 100;
		var final = translate + "px";
		project.css("translateX", final);
	}, 100);
});