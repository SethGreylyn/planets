import { Colour } from "./types/types";
import Vector from "./vector";
/**
 * A Planet object is the basic unit of the game. It is a circular body
 * drawn on the canvas, with a radius, mass, and density which affect its
 * gravitational attraction to other Planets.
 */
export default class Planet {
    /** Static constants */

    // The number of pixels consumed in a linear unit of length
    static readonly pxPerUnit = 10;

    /** Private members */

    // The pixel position of the planet
    private pos: Vector;

    // The velocity of the planet, in pixels per draw
    private vel: Vector;

    // The planet's colour
    private colour: Colour;

    // The planet's mass, in Earth masses
    private mass: number;

    // The planet's radius, in Earth radii
    private radius: number;

    // The planet's area
    private area: number;

    // The planet's density
    private density: number;

    constructor (x: number, y: number, mass: number, radius: number, velX: number = 0, velY: number = 0, colour: Colour = "green") {
        this.pos = new Vector(x, y);
        this.vel = new Vector(velX, velY);
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

    getRadiusInPixels(): number {
        return this.radius * Planet.pxPerUnit;
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
        this.vel = new Vector(vector.getX(), vector.getY());
    }

    addToVelocity(vector: Vector): void {
        this.vel.add(vector);
    }

    move(): void {
        this.pos.add(this.vel);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const pos = this.getPosition();
        const pixelRadius = this.getRadiusInPixels();
        ctx.beginPath();
        ctx.arc(pos.getX(), pos.getY(), pixelRadius, 0, 2*Math.PI, false);
        ctx.fillStyle = this.getColour();
        ctx.fill();
        ctx.closePath();
    }

}