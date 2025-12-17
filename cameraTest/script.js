const btn = document.getElementById("cameraButton");
const video = document.getElementById("video");

btn.addEventListener("click", async () => {
	if (video.srcObject) return;

	const stream = await navigator.mediaDevices.getUserMedia({
		video: { facingMode: "user" },
	});

	video.srcObject = stream;
});
