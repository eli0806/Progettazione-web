// Dichiarazione globale delle variabili
const passo = 10;
let area;
let quadrato;

let posX = 0;
let posY = 0;

document.addEventListener("DOMContentLoaded", function() {
    area = document.querySelector("section");
    quadrato = document.querySelector("div");
    quadrato.style.position = "absolute";
});

document.addEventListener("keydown", function(e) {
    if (!area || !quadrato) return;

    if (e.key === 'w' || e.key === 'W') {
        posY -= passo;
    }
    if (e.key === 'a' || e.key === 'A') {
        posX -= passo;
    }
    if (e.key === 's' || e.key === 'S') {
        posY += passo;
    }
    if (e.key === 'd' || e.key === 'D') {
        posX += passo;
    }

    const maxX = area.clientWidth - quadrato.offsetWidth;
    const maxY = area.clientHeight - quadrato.offsetHeight;

    posX = Math.max(0, Math.min(posX, maxX));
    posY = Math.max(0, Math.min(posY, maxY));

    quadrato.style.left = posX + "px";
    quadrato.style.top = posY + "px";
});
