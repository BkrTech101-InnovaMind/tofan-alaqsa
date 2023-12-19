// images changer
// List of image SRCs
const imageList = ["./imgs/p1.png", "./imgs/p2.png"];
let currentImageIndex = 0;

function changeImage() {
	const mapImage = document.getElementById("mapImage");
	mapImage.src = imageList[currentImageIndex];

	// Move to the next image or loop back to the first one
	currentImageIndex = (currentImageIndex + 1) % imageList.length;
}

// Set interval to change image every 2 seconds (2000 milliseconds)
setInterval(changeImage, 2000);

// texts animation
document.addEventListener("DOMContentLoaded", function () {
	const texts = document.querySelectorAll(".texts-area h1");

	texts.forEach((text) => {
		moveTextRandomly(text);
	});

	function moveTextRandomly(element) {
		const container = document.querySelector(".texts-area");
		const maxWidth = container.clientWidth - element.clientWidth;
		const maxHeight = container.clientHeight - element.clientHeight;

		function getRandomPosition() {
			const x = Math.random() * maxWidth;
			const y = Math.random() * maxHeight;
			return { x, y };
		}

		function animateText() {
			const position = getRandomPosition();
			element.style.transform = `translate(${position.x}px, ${position.y}px)`;
			setTimeout(() => requestAnimationFrame(animateText), 100);
		}

		animateText(); // Start the animation loop
	}
});
