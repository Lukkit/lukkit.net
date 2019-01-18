if(Cookies.get("theme") === "light") {
	$("body").removeClass("dark");
} else {
	Cookies.set("theme", "dark");
}

$(document).ready(function( ) {
	$(".toggle").click(function( ) {
		$("body").toggleClass("dark");
		
		Cookies.set("theme", $("body").hasClass("dark") ? "dark" : "light");
	});
});