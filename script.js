const trail = [];
const maxTrail = 20;
const trailOpacity = 0.6;

document.addEventListener("mousemove", (e) => {
    const trailElement = document.createElement("div");
    trailElement.className = "cursor-trail";
    document.body.appendChild(trailElement);

    trail.push(trailElement);
    updateTrail(e.clientX, e.clientY);

    if (trail.length > maxTrail) {
        document.body.removeChild(trail.shift());
    }
});

function updateTrail(x, y) {
    trail.forEach((el, i) => {
        setTimeout(() => {
            el.style.left = `${x}px`;
            el.style.top = `${y}px`;
        }, i * 20);
    });
}
