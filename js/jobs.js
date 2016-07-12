var jobs = {
	"empresa": {
		"image": "sea.jpg",
		"business": "empresa",
		"link": "https://www.facebook.com",
		"resume": "bla bla bla",
		"cups": 7,
		"opinion": "aksjdfhaksjdfhaidiasdf",
		"tags": ["php", "html", "jquery", "mysql"]
	}
}

$(document).ready(function() {
	$("#works > article").click(function() {
		var data = $(this).attr("id");
		if (data === "empresa") {
			var file = jobs.empresa;
		} else if (data === "empresa2") {
			var file = jobs.empresa;
		} else {
			var file = jobs.empresa;
		}
		var image = file.image;
		var business = file.business;
		var link = file.link;
		var resume = file.resume;
		var cups = file.cups;
		var opinion = file.opinion;
		var tags = file.tags;
		$("body").prepend("<a id=\"link\"></a>");
		$("body").prepend("<section id=\"lightbox\" ></section>");
		$("#lightbox").append("<article class=\"first-lightbox\" style=\"background-image: url(img/" + image + ");\"></article>");
		$("#lightbox").append("<article class=\"last-lightbox\"></article>");
		$(".last-lightbox").append("<h4><a target=\"_blank\" href=\" " + link + " \">" + business + "</a></h4>");
 		$(".last-lightbox").append("<p>" + resume + "</p>");
 		$(".last-lightbox").append("<h4>$cups_of_coffee</h4>");
 		$(".last-lightbox").append("<ul class=\"cups\"></ul>");
 		for (var i = 0; i < cups; i++) {
 			$(".cups").append("<li></li>");
 		}
 		$(".last-lightbox").append("<h4>$opinion</h4>");
 		$(".last-lightbox").append("<p>" + opinion + "</p>");
 		$(".last-lightbox").append("<h4>$tags</h4>");
 		$(".last-lightbox").append("<ul class=\"tags\"><ul>");
 		for (var i = 0; i < tags.length; i++) {
 			$(".tags").append("<li>" + tags[i] + "</li>");
 		}
 
 		$("#link").click(function() {
 			$("#lightbox").remove();
 			$("#link").remove();
 		});
 	});			
}); 