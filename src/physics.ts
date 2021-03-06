import Planet from "./planet";
import Vector from "./vector";
const G = 0.25;
const COLLISION_FACTOR = 0.75;

/** This static class provides a library of physics functions, using Newtonian mechanics. */
export default class Physics {
    public static collidePlanets(planet1: Planet, planet2: Planet): Planet {
        const midpointX = (planet1.getPosition().getX() + planet2.getPosition().getX()) / 2;
        const midpointY = (planet1.getPosition().getY() + planet2.getPosition().getY()) / 2;

        const newMass = (planet1.getMass() + planet2.getMass()) * COLLISION_FACTOR;
        const newRadius = Math.sqrt(((planet1.getArea() + planet2.getArea()) * COLLISION_FACTOR) / Math.PI);

        const newVelX = (planet1.getMass() * planet1.getVelocity().getX())
            + (planet2.getMass() * planet2.getVelocity().getX());
        const newVelY = (planet1.getMass() * planet1.getVelocity().getY())
            + (planet2.getMass() * planet2.getVelocity().getY());

        return new Planet(midpointX, midpointY, newMass, newRadius, newVelX, newVelY);
    }

    public static doPlanetsCollide(planet1: Planet, planet2: Planet): boolean {
        const distanceBetweenCentres = Vector.distance(planet1.getPosition(), planet2.getPosition());
        return (planet1.getRadiusInPixels() + planet2.getRadiusInPixels()) > distanceBetweenCentres;
    }

    public static gravitatePair(planet1: Planet, planet2: Planet) {
        if (planet1 === undefined || planet2 === undefined) {
            return;
        }

        const m1 = planet1.getMass();
        const m2 = planet2.getMass();
        const pos1 = planet1.getPosition();
        const pos2 = planet2.getPosition();
        const rSquared = Math.pow(Vector.distance(pos1, pos2), 2);
        const force = G * (m1 * m2 ) / rSquared;
        const a1 = force / m1;
        const a2 = force / m2;
        const d1Vector = Vector.unitVectorBetween(pos1, pos2).scale(a1);
        const d2Vector = Vector.unitVectorBetween(pos2, pos1).scale(a2);

        planet1.addToVelocity(d1Vector);
        planet2.addToVelocity(d2Vector);
    }

    public static gravitate(planets: Planet[]) {
        for (let outerIndex = planets.length - 1; outerIndex >= 0; --outerIndex) {
            let outerPlanet = planets[outerIndex];
            for (let innerIndex = outerIndex - 1; innerIndex >= 0; --innerIndex) {
                let innerPlanet = planets[innerIndex];
                if (this.doPlanetsCollide(outerPlanet, innerPlanet)) {
                    planets.splice(outerIndex, 1);
                    planets.splice(innerIndex, 1, this.collidePlanets(outerPlanet, innerPlanet));
                    outerPlanet = null;
                    innerPlanet = planets[innerIndex];
                } else {
                    this.gravitatePair(outerPlanet, innerPlanet);
                }
            }
        }
    }
}
