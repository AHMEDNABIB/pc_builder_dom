document
	.getElementById("sixteenGB")
	.addEventListener("click", function (params) {
		// const memoryCost = document.getElementById("memory-cost");

		// memoryCost.innerText = 200;

		// const bestPrice = document.getElementById("best-price").innerText;

		// const memoryPrice = document.getElementById("memory-cost").innerText;

		// const storagePrice = document.getElementById("storage-cost").innerText;

		// const deliveryPrice =
		// 	document.getElementById("delivery-cost").innerText;

		// const totalPrice =
		// 	parseFloat(bestPrice) +
		// 	parseFloat(memoryPrice) +
		// 	parseFloat(storagePrice) +
		// 	parseFloat(deliveryPrice);

		// const total = document.getElementById("total-price");

		// total.innerText = totalPrice;

		updatePrice("memory-cost", 300);
	});

document.getElementById("eightGB").addEventListener("click", function (params) {
	updatePrice("memory-cost", 0);
});

document.getElementById("ssd3").addEventListener("click", function (params) {
	updatePrice("storage-cost", 500);
});

document.getElementById("ssd3").addEventListener("click", function (params) {
	updatePrice("storage-cost", 500);
});

documrnt
	.getElementById("paid-delivery")
	.addEventListener("click", function (params) {
		updatePrice("delivery-cost", 20);
	});

function updatePrice(itemId, price) {
	const memoryCost = document.getElementById(itemId);
	memoryCost.innerText = price;
	const bestPrice = document.getElementById("best-price").innerText;
	const memoryPrice = document.getElementById("memory-cost").innerText;
	const storagePrice = document.getElementById("storage-cost").innerText;
	const deliveryPrice = document.getElementById("delivery-cost").innerText;
	const totalPrice =
		parseFloat(bestPrice) +
		parseFloat(memoryPrice) +
		parseFloat(storagePrice) +
		parseFloat(deliveryPrice);
	const total = document.getElementById("total-price");
	total.innerText = totalPrice;
}
