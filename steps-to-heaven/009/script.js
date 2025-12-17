let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun;

nextDom.onclick = () => showSlider("next");
prevDom.onclick = () => showSlider("prev");

startAutoRun();

function startAutoRun() {
	runAutoRun = setTimeout(() => {
		nextDom.click();
	}, timeAutoNext);
}

function showSlider(type) {
	let itemSlider = document.querySelectorAll(".carousel .list .item");
	let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

	// Prevent spam clicks
	nextDom.disabled = true;
	prevDom.disabled = true;

	if (type === "next") {
		listItemDom.appendChild(itemSlider[0]);
		thumbnailDom.appendChild(itemThumbnail[0]);
		carouselDom.classList.add("next");
	} else {
		let lastIndex = itemSlider.length - 1;
		listItemDom.prepend(itemSlider[lastIndex]);
		thumbnailDom.prepend(itemThumbnail[lastIndex]);
		carouselDom.classList.add("prev");
	}

	clearTimeout(runTimeOut);
	runTimeOut = setTimeout(() => {
		carouselDom.classList.remove("next");
		carouselDom.classList.remove("prev");

		nextDom.disabled = false;
		prevDom.disabled = false;
	}, timeRunning);

	clearTimeout(runAutoRun);
	startAutoRun();
}
