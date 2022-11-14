function multiplicationTable(n) {
    var str = ""
    for (var i = 1; i <= 10; i++) {
        str += (n * i) + " ";
    }
    return str;
}

function randomColor() {
    var letter = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

var n = 2;
var font = 20;

var id = setInterval(function () {
    if (n <= 10) {
        var p = document.querySelector("p");
        p.innerHTML = multiplicationTable(n);
        p.style.color = randomColor();
        p.style.fontSize = font + "px";
        font += 5;
        n++;
    } else {
        clearInterval(id);
    }
}, 5000);