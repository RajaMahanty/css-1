const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
	body.classList.add("dark-mode");
	darkModeToggle.textContent = "☀️";
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
	body.classList.toggle("dark-mode");

	// Save preference to localStorage
	if (body.classList.contains("dark-mode")) {
		localStorage.setItem("darkMode", "enabled");
		darkModeToggle.textContent = "☀️";
	} else {
		localStorage.setItem("darkMode", "disabled");
		darkModeToggle.textContent = "🌙";
	}
});

// Dynamic 3D Card Tilt Effect
const heroImage = document.querySelector(".image img");
const imageContainer = document.querySelector(".image");

if (heroImage && imageContainer) {
	imageContainer.addEventListener("mousemove", (e) => {
		const rect = heroImage.getBoundingClientRect();
		const x = e.clientX - rect.left; // Mouse X position relative to image
		const y = e.clientY - rect.top; // Mouse Y position relative to image

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		// Calculate rotation based on mouse position
		// rotateY: negative when mouse is on left, positive when on right
		// rotateX: positive when mouse is on top, negative when on bottom
		const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
		const rotateX = ((centerY - y) / centerY) * 5; // Max 5 degrees

		// Apply the transform
		heroImage.style.transform = `scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
	});

	imageContainer.addEventListener("mouseleave", () => {
		// Reset to original position when mouse leaves
		heroImage.style.transform = "scale(1) rotateY(0deg) rotateX(0deg)";
	});
}
