"use strict";

$(function() {
	var initialTheme = localStorage["theme"];
	
	if (initialTheme) {
		$("#theme-switch label").each(function(index, label) {
			$(label).toggleClass("active", $(label).find("input").attr("data-theme") == initialTheme);
		});
	}
	
	$("#theme-switch label").change(function() {
		var label = $(this);
		
		setTimeout(function() {
			if (label.has("active")) {
				var theme = label.find("input").attr("data-theme");
				$("#bootstrap-link").attr("href", "/css/" + theme + "/bootstrap.css");
				$("#theme-link").attr("href", "/css/" + theme + ".css");
				localStorage["theme"] = theme;
			}
		}, 0);
	});
});

