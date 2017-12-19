/**
 * A Planet object is the basic unit of the game. It is a circular body
 * drawn on the canvas, with a radius, mass, and density which affect its
 * gravitational attraction to other Planets.
 */
export default class Planet {
    constructor (x, y, velX = 0, velY = 0) {
        this.pos = {x, y};
        this.vel = {x: velX, y: velY};

        // Experimental constants, will be dynamised later.
        this.colour = "green";
        this.mass = 1;
        this.radius = 3;
        this.area = Math.PI * Math.pow(this.radius, 2);
        this.density = this.mass / this.volume;
    }

    getPosition() {
        return this.pos;
    }

    getRadius() {
        return this.radius;
    }

    getColour() {
        return this.colour;
    }

    getVelocity() {
        return this.vel;
    }

    setVelocity({x, y}) {
        this.vel = {x, y};
    }

    addToVelocity({newX, newY}) {
        this.vel = {x: this.vel.x + newX, y: this.vel.y + newY};
    }

    move() {
        this.pos.x += this.vel.x, this.pos.y += this.vel.y;
    }
}