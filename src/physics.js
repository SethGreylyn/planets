const G = 1;

/** This static class provides a library of physics functions, using Newtonian mechanics. */
export static class Physics {
    static distance({x1, y1}, {x2, y2}) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    // TODO: Finish gravitate; maybe design function with one loop of planets instead of nested?
    static gravitate(planet1, planet2) {
        const m1 = planet1.getMass();
        const m2 = planet2.getMass();
        const pos1 = planet1.getPosition();
        const pos2 = planet2.getPosition();
        const rSquared = Math.pow(distance(pos1, pos2), 2);
        const force = G * (m1*m2)/rSquared;


    }
}