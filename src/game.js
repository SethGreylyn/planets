import Planet from './planet';
import Physics from './physics';
const planets = [];
const pxPerUnit = 10;
let canvas = document.getElementById("aether");
let ctx = canvas.getContext("2d");

function gameInit() {
    planets.push(new Planet(canvas.width/2, canvas.height/2));
}

function drawPlanets() {
    planets.forEach(planet => {
        planet.move();
        const pos = planet.getPosition();
        const radius = planet.getRadius();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius * pxPerUnit, 0, 2*Math.PI, false);
        ctx.fillStyle = planet.getColour();
        ctx.fill();
        ctx.closePath();
    });
}

function setPlanetVelocities() {
    Physics.gravitate(planets);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPlanetVelocities();
    drawPlanets();
}

gameInit();
setInterval(draw, 10);