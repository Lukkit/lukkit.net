if(store.get("theme") === "dark") {
	$("body").addClass("dark");
} else {
	store.set("theme", "light");
}

$(document).ready(function( ) {
	$(".toggle").click(function( ) {
		$("body").toggleClass("dark");
		
		store.set("theme", $("body").hasClass("dark") ? "dark" : "light");
	});
});