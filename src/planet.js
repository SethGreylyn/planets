/**
 * A Planet object is the basic unit of the game. It is a circular body
 * drawn on the canvas, with a radius, mass, and density which affect its
 * gravitational attraction to other Planets.
 */
export default class Planet {
    constructor (x, y) {
        this.pos = {x, y};

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

    move(newX, newY) {
        this.pos.x = newX, this.pos.y = newY;
    }
}