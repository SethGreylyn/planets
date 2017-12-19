import { Vector, Colour } from "./types/types";
/**
 * A Planet object is the basic unit of the game. It is a circular body
 * drawn on the canvas, with a radius, mass, and density which affect its
 * gravitational attraction to other Planets.
 */
export default class Planet {
    pos: Vector;
    vel: Vector;
    colour: Colour;
    mass: number;
    radius: number;
    area: number;
    density: number;
    constructor (x, y, velX = 0, velY = 0) {
        this.pos = {x, y};
        this.vel = {x: velX, y: velY};

        // Experimental constants, will be dynamised later.
        this.colour = "green";
        this.mass = 1;
        this.radius = 3;
        this.area = Math.PI * Math.pow(this.radius, 2);
        this.density = this.mass / this.area;
    }

    getPosition(): Vector {
        return this.pos;
    }

    getRadius(): number {
        return this.radius;
    }

    getColour(): Colour {
        return this.colour;
    }

    getVelocity(): Vector {
        return this.vel;
    }

    setVelocity({x, y}): void {
        this.vel = {x, y};
    }

    addToVelocity({newX, newY}): void {
        this.vel = {x: this.vel.x + newX, y: this.vel.y + newY};
    }

    move(): void {
        this.pos.x += this.vel.x, this.pos.y += this.vel.y;
    }
}