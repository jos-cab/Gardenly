window.onscroll = function scrollFunction() {
	if (
		document.body.scrollTop > 250 ||
		document.documentElement.scrollTop > 250
	) {
		document.getElementById("ScrollTopButton").style.display = "block";
	} else {
		document.getElementById("ScrollTopButton").style.display = "none";
	}
};

function scrollTopDocument() {
	window.scroll({ top: 0, behavior: "smooth" });
}
