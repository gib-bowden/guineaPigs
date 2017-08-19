outputTarget = document.getElementById("output-target");
guineaPig = document.getElementById("guinea-pig");


document.getElementById("section-container").addEventListener("click",(e) => {
	 outputTarget.innerHTML = `You clicked on the ${e.target.innerHTML} section`;
	 console.log(e);
})

document.getElementById("page-title").addEventListener("mouseenter",() => {
	 outputTarget.innerHTML = `You moved your mouse over the header`;
})

document.getElementById("page-title").addEventListener("mouseout",() => {
	 outputTarget.innerHTML = `You left me!`;
})

document.getElementById("keypress-input").addEventListener("keypress",(e) => {
	console.log(e);
	if (e.key !== "Enter") {
	 outputTarget.innerHTML = e.target.value + e.key;
	}
})

document.getElementById("add-color").addEventListener("click", () => {
 	guineaPig.classList.toggle("blue")
})

document.getElementById("make-large").addEventListener("click", () => {
	guineaPig.classList.toggle("hulk")
})

document.getElementById("add-border").addEventListener("click", () => {
	guineaPig.classList.toggle("capture")
})

document.getElementById("add-rounding").addEventListener("click", () => {
	guineaPig.classList.toggle("round")
})


var changeSectionStyles = () => {
	var children = document.getElementById("section-container").children 
	for (let child of children) {
		i = Array.prototype.indexOf.call(children, child);
		if (i === 0) {
			child.classList.add("bold")
		} else if (i === (children.length - 1)) {
			child.classList.add("bold", "italic")
		}
	}
}

function changeButtonsToBlock() {
	var children = document.body.childNodes
	for (let child of children) {
		if (child.nodeName === "BUTTON") {
				child.classList.add("button");
		}
	}
}

changeButtonsToBlock()
changeSectionStyles();