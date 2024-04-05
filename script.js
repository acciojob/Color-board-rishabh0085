//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");

    // Generate 800 square elements
    for (let i = 0; i < 800; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
});
