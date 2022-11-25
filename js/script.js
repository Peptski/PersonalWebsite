const preImg = document.getElementById("img-pre");
const postImg = document.getElementById("img-post");

if (postImg.complete) {
	updateChart();
} else {
	postImg.addEventListener("load", updateChart);
}

function updateChart() {
	preImg.style.display = "none";
	postImg.style.display = "inline";
}
