import Planet from './planet';
const planets = [];
const pxPerUnit = 10;
const dx = 0;
const dy = 0;
let canvas = document.getElementById("aether");
let ctx = canvas.getContext("2d");

function gameInit() {
    planets.push(new Planet(canvas.width/2, canvas.height/2));
}

// TODO: Add vectors for movement to planets to preview next move, physics to alter the vectors, etc.
function move(planet) {
    const pos = planet.getPosition();
    const pixelRadius = planet.getRadius() * pxPerUnit;
    let newX = pos.x + dx;
    let newY = pos.y + dy;
    if (newX > canvas.width - pixelRadius) {
        newX = pixelRadius;
    }
    if (newY > canvas.height - pixelRadius) {
        newY = pixelRadius;
    }
    planet.move(newX, newY);
}

function drawPlanets() {
    planets.forEach(planet => {
        move(planet);
        const pos = planet.getPosition();
        const radius = planet.getRadius();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius * pxPerUnit, 0, 2*Math.PI, false);
        ctx.fillStyle = planet.getColour();
        ctx.fill();
        ctx.closePath();
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlanets();
}

gameInit();
setInterval(draw, 10);