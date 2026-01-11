let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

let lastScrollY = 0;
let ticking = false;

const update = () => {
	// 1. Get the height of the parallax section
	const parallaxHeight = document.querySelector(".parallax").offsetHeight;
	const value = lastScrollY;

	// 2. Only apply styles if the section is still in view
	if (value <= parallaxHeight) {
		text.style.marginTop = value * 2.5 + "px";
		leaf.style.top = value * -1.5 + "px";
		leaf.style.left = value * 1.5 + "px";
		hill5.style.left = value * 1.5 + "px";
		hill4.style.left = value * -1.5 + "px";
		hill1.style.top = value * 1 + "px";
	}

	ticking = false;
};

window.addEventListener("scroll", () => {
	lastScrollY = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(update);
		ticking = true;
	}
});
