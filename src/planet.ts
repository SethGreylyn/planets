import { Colour } from "./types/types";
import Vector from "./vector";
/**
 * A Planet object is the basic unit of the game. It is a circular body
 * drawn on the canvas, with a radius, mass, and density which affect its
 * gravitational attraction to other Planets.
 */
export default class Planet {
    private pos: Vector;
    private vel: Vector;
    private colour: Colour;
    private mass: number;
    private radius: number;
    private area: number;
    private density: number;

    constructor (x: number, y: number, mass: number, radius: number, colour: Colour = "green", velX: number = 0, velY: number = 0) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(velX, velY);

        // Experimental constants, will be dynamised later.
        this.colour = colour;
        this.mass = mass;
        this.radius = radius;
        this.area = Math.PI * Math.pow(this.radius, 2);
        this.density = this.mass / this.area;
    }

    getPosition(): Vector {
        return this.pos;
    }

    getMass(): number {
        return this.mass;
    }

    getRadius(): number {
        return this.radius;
    }

    getArea(): number {
        return this.area;
    }

    getColour(): Colour {
        return this.colour;
    }

    getVelocity(): Vector {
        return this.vel;
    }

    setVelocity(vector: Vector): void {
        this.vel = vector;
    }

    addToVelocity(vector: Vector): void {
        this.vel.add(vector);
    }

    move(): void {
        this.pos.add(this.vel);
    }
}