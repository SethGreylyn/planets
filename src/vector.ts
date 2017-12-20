export default class Vector {
    private x: number;
    private y: number;
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    add(vector: Vector) {
        this.x += vector.getX();
        this.y += vector.getY();
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