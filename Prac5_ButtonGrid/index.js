p = document.querySelector("p");

document.querySelector(".red").addEventListener("click", function () {
    p.style.color = "red";
});

document.querySelector(".green").addEventListener("click", function () {
    p.style.color = "green";
});

document.querySelector(".blue").addEventListener("click", function () {
    p.style.color = "blue";
});

document.querySelector(".n10").addEventListener("click", function () {
    p.style.fontSize = "10px";
});

document.querySelector(".n20").addEventListener("click", function () {
    p.style.fontSize = "20px";
});

document.querySelector(".n30").addEventListener("click", function () {
    p.style.fontSize = "30px";
});

document.querySelector(".monospace").addEventListener("click", function () {
    p.style.fontFamily = "Monospace";
});

document.querySelector(".cursive").addEventListener("click", function () {
    p.style.fontFamily = "Cursive";
});

document.querySelector(".sans-serif").addEventListener("click", function () {
    p.style.fontFamily = "sans-serif";
});