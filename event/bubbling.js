var cnt = 0;
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
    if (e.target.tagName !== "BUTTON") return;
    if (e.target.style.backgroundColor === "red") {
        e.target.style.backgroundColor = "white";
        cnt--;
        return;
    }
    if (cnt >= 2) {
        cnt = 0;
        container.querySelectorAll("button").forEach((child) => {
            child.style.backgroundColor = "white";
        });
    }
    e.target.style.backgroundColor = "red";
    cnt++;
});
const ball = document.querySelector(".ball");

// Try to click outside, how to fix it? 
ball.onclick = (e) => {
    if (ball.style.backgroundColor === "blue") {
        ball.style.backgroundColor = "red";
    }
    else {

        ball.style.backgroundColor = "blue";
    }
}

document.body.addEventListener("click", (e) => {
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
