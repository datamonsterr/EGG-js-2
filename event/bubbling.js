let cnt = 0;
const container = document.querySelector(".Container");
container.querySelectorAll("button").forEach((btn) => {
	let span = btn.querySelector("span");
	btn.onclick = (e) => {
		let current = parseInt(span.innerText);
		span.innerText = `${current + 1}`;
	}
});

// Try to click on the span, how to fix it?
container.addEventListener("click", (e) => {
	e.stopPropagation();
	let tar = e.target;
	console.log(tar)
	if (tar.tagName !== "SPAN") return;
	if (tar.style.backgroundColor === "red") {
		tar.style.backgroundColor = "white";
		cnt--;
		return;
	}
	if (cnt >= 2) {
		cnt = 0;
		container.querySelectorAll("button").forEach((child) => {
			child.style.backgroundColor = "white";
		});
	}
	tar.style.backgroundColor = "red";
	cnt++;
});
const ball = document.querySelector(".ball");
console.log(ball)

ball.addEventListener("click", (e) => {
	e.stopPropagation();
});

document.body.addEventListener("click", (e) => {
	console.log(e.target);
	if (e.target.classList.contains("ball")) return;
	if (ball.style.backgroundColor === "red") {
		ball.style.backgroundColor = "blue";
	} else {
		ball.style.backgroundColor = "red";
	}
})


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ballX = mouseX;
let ballY = mouseY;

const easingFactor = 0.1;

document.addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});
(function animate() {
	const dx = mouseX - ballX;
	const dy = mouseY - ballY;

	ballX += dx * easingFactor;
	ballY += dy * easingFactor;

	if (
		ballX >= container.getBoundingClientRect().left &&
		ballX <= container.getBoundingClientRect().left + container.clientWidth &&
		ballY >= container.getBoundingClientRect().top &&
		ballY <= container.getBoundingClientRect().top + container.clientHeight
	) {
		ball.style.backgroundColor = "cyan";
	} else {
		if (ball.style.backgroundColor === "cyan")
			ball.style.backgroundColor = "red";
		ball.style.left = `${ballX - ball.offsetWidth / 2}px`;
		ball.style.top = `${ballY - ball.offsetHeight / 2}px`;
	}

	requestAnimationFrame(animate);
})()
