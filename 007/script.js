const menuIcon = document.querySelector(".menu-icon");
const panel = document.querySelector(".panel");
const menu = document.querySelector(".menu");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

// Toggle side menu
menuIcon.addEventListener("click", () => {
	panel.classList.toggle("show-menu");
	menu.classList.toggle("active");
});

// Toggle search bar
searchIcon.addEventListener("click", () => {
	searchInput.classList.toggle("active");

	if (searchInput.classList.contains("active")) {
		searchInput.focus();
	} else {
		searchInput.blur();
	}
});
