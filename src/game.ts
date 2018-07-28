import Physics from "./physics";
import Planet from "./planet";
const planets: Planet[] = [];
const canvas = document.getElementById("aether") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

function gameInit() {
    planets.push(new Planet(canvas.width / 2 - 50, canvas.height / 2, 1, 1, 0, 0.025));
    planets.push(new Planet(canvas.width / 2 + 50, canvas.height / 2, 1, 1, 0, -0.025));
}

function drawPlanets() {
    planets.forEach((planet) => {
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
