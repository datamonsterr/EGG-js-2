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

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Move the ball to the mouse position
    ball.style.left = `${mouseX - ball.offsetWidth / 2}px`;
    ball.style.top = `${mouseY - ball.offsetHeight / 2}px`;
});