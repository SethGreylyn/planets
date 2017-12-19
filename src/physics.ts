const G = 1;

/** This static class provides a library of physics functions, using Newtonian mechanics. */
export default class Physics {
    static distance({x1, y1}, {x2, y2}) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    static unitVectorBetween({x1, y1}, {x2, y2}) {
        const dist = Physics.distance({x1, y1}, {x2, y2});
        const x = (x2 - x1)/dist;
        const y = (y2 - y1)/dist;
        return {x, y};
    }

    // TODO: Finish gravitate; maybe design function with one loop of planets instead of nested?
    static gravitatePair(planet1, planet2) {
        const m1 = planet1.getMass();
        const m2 = planet2.getMass();
        const pos1 = planet1.getPosition();
        const pos2 = planet2.getPosition();
        const rSquared = Math.pow(Physics.distance(pos1, pos2), 2);
        const force = G * (m1*m2)/rSquared;
        const a1 = force/m1;
        const a2 = force/m2;
        const d1Vector = Physics.unitVectorBetween(pos2, pos1);
        const d2Vector = Physics.unitVectorBetween(pos1, pos2);

        //planet1.

    }

    static gravitate(planets) {
        planets.forEach(self => {
            planets.forEach(planet => {
                if (self.getPosition() !== planet.getPosition()) {
                    Physics.gravitatePair(self, planet);
                }
            });
        });
    }
}