import Planet from './planet';
import Physics from './physics';
const planets: Planet[] = [];
let canvas = <HTMLCanvasElement>document.getElementById("aether");
let ctx = canvas.getContext("2d");

function gameInit() {
    planets.push(new Planet(canvas.width/2 - 50, canvas.height/2, 1, 1));
    planets.push(new Planet(canvas.width/2 + 50, canvas.height/2, 1, 1));
    planets.push(new Planet(canvas.width/2, 0, 2, 0.5, "green", 0, 0.01));
}

function drawPlanets() {
    planets.forEach(planet => {
        planet.move();
        planet.draw(ctx);
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