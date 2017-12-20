import Vector from "./vector";
import Planet from "./planet";
const G = 1;

/** This static class provides a library of physics functions, using Newtonian mechanics. */
export default class Physics {
    // TODO: Finish gravitate; maybe design function with one loop of planets instead of nested?
    static gravitatePair(planet1: Planet, planet2: Planet) {
        const m1 = planet1.getMass();
        const m2 = planet2.getMass();
        const pos1 = planet1.getPosition();
        const pos2 = planet2.getPosition();
        const rSquared = Math.pow(Vector.distance(pos1, pos2), 2);
        const force = G * (m1*m2)/rSquared;
        const a1 = force/m1;
        const a2 = force/m2;
        const d1Vector = Vector.unitVectorBetween(pos1, pos2);
        const d2Vector = Vector.unitVectorBetween(pos2, pos1);
        planet1.addToVelocity(d1Vector);
        planet2.addToVelocity(d2Vector);
    }

    static gravitate(planets: Planet[]) {
        planets.forEach(self => {
            planets.forEach(planet => {
                if (self.getPosition() !== planet.getPosition()) {
                    Physics.gravitatePair(self, planet);
                }
            });
        });
    }
}