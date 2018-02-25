/**
 * A custom-built class for two-dimensional vectors, whose coordinates (and therefore lengths)
 * are implied by the context in which the vectors are employed. In the planets gravity sim,
 * the vectors exist in pixel space, and therefore planetary units should be converted to pixels
 * before being subject to vector calculations.
 */
export default class Vector {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getLength(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    add(vector: Vector): Vector {
        this.x += vector.getX();
        this.y += vector.getY();
        return this;
    }

    scale(scalar: number): Vector {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    static distance(vector1, vector2): number {
        return Math.sqrt(Math.pow(vector1.getX() - vector2.getX(), 2) + Math.pow(vector1.getY() - vector2.getY(), 2));
    }

    static unitVectorBetween(vector1: Vector, vector2: Vector): Vector {
        const dist = Vector.distance(vector1, vector2);
        const x = (vector2.getX() - vector1.getX())/dist;
        const y = (vector2.getY() - vector1.getY())/dist;
        return new Vector(x, y);
    }
}