if(store.get("theme") === "light") {
	$("body").removeClass("dark");
} else {
	store.set("theme", "dark");
}

$(document).ready(function( ) {
	$(".toggle").click(function( ) {
		$("body").toggleClass("dark");
		
		store.set("theme", $("body").hasClass("dark") ? "dark" : "light");
	});
});