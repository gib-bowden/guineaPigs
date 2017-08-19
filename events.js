outputTarget = document.getElementById("output-target");
guineaPig = document.getElementById("guinea-pig");


document.getElementById("section-container").addEventListener("click",(e) => {
	 outputTarget.innerHTML = `You clicked on the ${e.target.innerHTML} section`;
})

document.getElementById("page-title").addEventListener("mouseenter",(e) => {
	console.log(e);
	 outputTarget.innerHTML = `You moved your mouse over the header`;
})

document.getElementById("page-title").addEventListener("mouseout",(e) => {
	console.log(e);
	 outputTarget.innerHTML = `You left me!`;
})

document.getElementById("keypress-input").addEventListener("keypress",(e) => {
	console.log(e);
	if (e.key !== "Enter") {
	console.log(e)
	 outputTarget.innerHTML = e.target.value + e.key;
	}
})


document.getElementById("add-color").addEventListener("click", () => {
 	guineaPig.classList.toggle("blue")
})

document.getElementById("make-large").addEventListener("click", (e) => {
	guineaPig.classList.toggle("hulk")
})

document.getElementById("add-border").addEventListener("click", (e) => {
	guineaPig.classList.toggle("capture")
})

document.getElementById("add-rounding").addEventListener("click", (e) => {
	guineaPig.classList.toggle("round")
})